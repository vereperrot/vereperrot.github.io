---
layout: post
title:  "pass python dictionary to jinja2 template"
date:   2018-09-14 00:01:57 +0800
categories: python jinja2
---
```python
content = {'thing':'some stuff',
             'other':'more stuff'}
return render_template('template.html', **content)
```
