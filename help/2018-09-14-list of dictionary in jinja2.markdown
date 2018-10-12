---
layout: post
title:  "list of dictionary in jinja2"
date:   2018-09-14 00:01:57 +0800
categories: jinja2
---
```python
parent_dict = [{'A':'val1','B':'val2'},{'C':'val3','D':'val4'}]
```
```python
{% for dict_item in parent_dict %}
   {% for key, value in dict_item.items() %}
      <h1>Key: {{key}}</h1>
      <h2>Value: {{value}}</h2>
   {% endfor %}
{% endfor %}
```
