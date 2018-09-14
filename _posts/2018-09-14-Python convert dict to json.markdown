---
layout: post
title:  "Python convert dict to json"
date:   2018-09-14 00:01:57 +0800
categories: python json
---
```python
import json

r = {'is_claimed': 'True', 'rating': 3.5}
r = json.dumps(r)
loaded_r = json.loads(r)
loaded_r['rating'] #Output 3.5
type(r) #Output str
type(loaded_r) #Output dict
```
