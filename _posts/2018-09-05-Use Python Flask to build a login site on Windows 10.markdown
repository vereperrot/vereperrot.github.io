---
layout: post
title:  "Use Python Flask to build a login site on Windows 10"
date:   2018-09-05 00:01:57 +0800
categories: flask python
---
## Steps
1. clone the repository
```
git clone https://github.com/pallets/flask
cd flask
```
2. checkout the correct version
```
git tag  # shows the tagged versions
git checkout latest-tag-found-above
cd examples/tutorial
```
3. Create a virtualenv and activate it:
```
py -3 -m venv venv
venv\Scripts\activate.bat
```
4. Install Flaskr:
```
pip install -e .
```
5. Run
```
set FLASK_APP=flaskr
set FLASK_ENV=development
flask init-db #the action will clear all data in db
flask run
Open http://127.0.0.1:5000 in a browser.
```

## Reference
* [Flask tutorial](https://github.com/pallets/flask/tree/master/examples/tutorial)
* [w3schools w3css](https://www.w3schools.com/w3css/w3css_input.asp)
* [w3schools html](https://www.w3schools.com/html/html_form_input_types.asp)
