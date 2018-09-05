---
layout: post
title:  "Simple client_server restful with Python"
date:   2018-09-05 00:01:57 +0800
categories: python restful
---
## RESTFul Server
```python
from flask import Flask, request, json

app = Flask(__name__)

@app.route("/homecontrol/api/v1.0/temperature", methods=['POST'])#Change URL
def api_temperature():
    if request.headers['Content-Type'] == 'text/plain':
        print (request.data)
        return 'OK', 200
    elif request.headers['Content-Type'] == 'application/json':
        print (json.dumps(request.json))
        print (request.json["timestamp"])
        return "OK", 200
    else:
        return "Unsupported Media Type", 415

if __name__ == '__main__':
    app.run(debug = False)
```
## RESTFul Client
1. Install httplib2 with:
```batch
pip install httplib2
```
2. Create a file restful_client.py.  

```python
import httplib2
import json
import time
import datetime

if __name__ == '__main__':

    httplib2.debuglevel     = 0
    http                    = httplib2.Http()
    content_type_header     = "application/json"

    url = "http://127.0.0.1:5000/homecontrol/api/v1.0/temperature" # Change URL

    data = {    'room':         "Living Room",
                'temp':         23.45,
                'humidity':     50.00,
                'timestamp':    str(datetime.datetime.now())
           }

    headers = {'Content-Type': content_type_header}
    print ("Posting %s" % data)

    while True:
        response, content = http.request( url,
                                          'POST',
                                          json.dumps(data),
                                          headers=headers)
        print (response)
        print (content)
        time.sleep(3)
```

## Reference
[http://www.keithsterling.com/?p=493](http://www.keithsterling.com/?p=493)
