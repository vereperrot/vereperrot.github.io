---
layout: post
title:  "How to use python selenium"
date:   2018-09-02 00:01:57 +0800
categories: python
---
# What's selenium?
The python tool can automate web ui behavior. 

## Prepare
* Install selenium
```
python -m pip install selenium
```
* Download a web driver for the browser. [chrome-driver](https://sites.google.com/a/chromium.org/chromedriver/downloads).
* A simple web browser [Fenix](https://fenixwebserver.com/).

## Simple example
I will create a home page at hdocs directory in my web server. There are two buttons **hello** and **world**. I will simulate to click the world button. And it will show an alert message.

### index.html
```html
<html>
<div>
    <script>
    function print(){
        alert("world");
    }
    </script>
    <button>hello</button>
    <button onclick="print()">world</button>
</div>
</html>
```

### test.py
```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
driver = webdriver.Chrome("[Location]\chromedriver.exe")
driver.get("http://127.0.0.1:81/")
#assert "127.0.0.1" in driver.title
elems=driver.find_elements(By.XPATH, '//button')
for e in range(len(elems)):
    if e==1:
        elems[e].send_keys(Keys.RETURN)
    print(elems[e].text)
"""
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
"""
#assert "No results found." not in driver.page_source
#driver.close()
```

## Reference
* [selenium-python.readthedocs.io](https://selenium-python.readthedocs.io/index.html)
* [selenium package API](https://seleniumhq.github.io/selenium/docs/api/py/api.html)
* [selenium + python 中文文档](https://python-selenium-zh.readthedocs.io/zh_CN/latest/)
