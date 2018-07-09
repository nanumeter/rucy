from elasticsearch import Elasticsearch

es = Elasticsearch(hosts=["localhost"])

def search():
    res = es.search(index="logstash-*", body={
        "aggs": {
            "agg1": {
                "terms": {
                    "field": "LAST_VIEW.keyword"
                },
                "aggs": {
                    "agg2": {
                        "terms": {
                            "field": "VIEW_NAME.keyword"
                        }          
                    }
                }
            }
        }
    })
    datalist = []
    for item in res['aggregations']['agg1']['buckets']:
        for item2 in item['agg2']['buckets']:
            itemarr = [ item['key'], item2['key'], item2['doc_count'] ]
            datalist.append(itemarr)
    data = {"data":datalist}
    return data
