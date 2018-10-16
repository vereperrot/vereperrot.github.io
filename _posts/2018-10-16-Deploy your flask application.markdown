---
layout: post
title:  "Deploy your flask application"
date:   2018-10-16 00:01:57 +0800
categories: python flask
---
## Steps
* ```python3 -m pip install wheel```
* Change directory to your application folder
```
cd D:\Temp\FlaskTest\flask\examples\tutorial
```
* Create a wheel distribution file
```
python3 setup.py bdist_wheel
```
* You will find the file **dist/flaskr-1.0.0-py3-none-any.whl**. Copy it to the target computer. 
* Setup a virtualenv, then install with command:
```
py -3 -m venv venv
venv\Scripts\activate.bat
python3 -m pip install flaskr-1.0.0-py3-none-any.whl
set FLASK_APP=flaskr&set FLASK_ENV=development
```
* Copy your application folder **flaskr** to the target computer. And run flask with:
```
flask init-db
flask run -h <YOUR_IP> -p 5001
```

## Run with a production server
* Change directory to your application folder
```
cd D:\Temp\FlaskTest\flask\examples\tutorial
```
* Activate the virtualenv
```
venv\Scripts\activate.bat
```
* Install waitress WSGI server
```
python3 -m pip install waitress
```
* Create a waitress_server.py file to start waitress server
```python
from waitress import serve
import flaskr
serve(flaskr.create_app(), host='<YOUR_IP>', port=8080)
```
* Start server
```
python3 waitress_server.py
```

## Reference
* [Deploy to Production](http://flask.pocoo.org/docs/1.0/tutorial/deploy/)