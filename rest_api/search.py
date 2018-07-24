from elasticsearch import Elasticsearch
from pprint import pprint
es = Elasticsearch(hosts=["localhost"])

def search():
    res = es.search(index="logstash-*", body={
        "size": 0,
        "aggs": {
            "table": {
                "composite": {
                    "size": 10,
                    "sources": [
                        {
                            "from": {
                                "terms": {
                                    "field": "LAST_VIEW.keyword",
                                    "order": "desc"
                                }
                            }
                        },
                        {
                            "to": {
                                "terms": {
                                    "field": "VIEW_NAME.keyword"
                                }
                            }
                        }
                    ]
                }
            }
        }
    })
    datalist = []
    label_to_idx = dict()
    label = []
    source = []
    target = []
    value = []
    color = []
    link_label = []
    for item in res['aggregations']['table']['buckets']:
        label_to_idx[item['key']['from']] = ''
        label_to_idx[item['key']['to']] = ''

    idx = 0
    for item in label_to_idx.keys():
        label.append(item)
        label_to_idx[item] = idx
        idx += 1

    for item in res['aggregations']['table']['buckets']:
        source.append(label_to_idx[item['key']['from']])
        target.append(label_to_idx[item['key']['to']])
        value.append(item['doc_count'])
        color.append('rgba(0,0,96,0.2)')
        link_label.append('')
        itemarr = [item['key']['from'], item['key']['to'], item['doc_count']]
        datalist.append(itemarr)

    data = {"label_to_idx": label_to_idx, "label": label, "source": source, "target": target, "value": value,  "color": color, "link_label": link_label}
    return data
