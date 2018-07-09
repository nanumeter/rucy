import requests
import uuid
import time
import json

URL = 'http://localhost:31311'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    try:
        data = {'LAST_VIEW': uuid.uuid4().hex[:1], 'VIEW_NAME': uuid.uuid4().hex[:1]}
        res = requests.get(URL, data=json.dumps(data), headers=headers)
        print(res.status_code)
        time.sleep(1)
    except Exception as e:
        pass
