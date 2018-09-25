---
layout: post
title:  "How to install Python 2.7.15 and 3.6.5 on Windows 10"
date:   2018-09-02 00:01:57 +0800
categories: python windows
---
![python-site](/assets/python-site.png)

## Steps
1. [Download Python 2.7.15](https://www.python.org/downloads/). Install it with the default settings.
2. [Download Python 3.6.5](https://www.python.org/downloads/). Install it with the default settings.
3. Change the executable file name **C:\Python3\python.exe** to **C:\Python3\python3.exe**.

## Install modules
* Python3
```
python3 -m pip install pandas
```
* Python2
```
python -m pip install pandas
```

## Execute program
* Python3
```
python3 test.py
```
* Python2
```
python test.py
```

## Reference
[How to install Python 2.7 and 3.6 to Windows 10](https://datascience.com.co/how-to-install-python-2-7-and-3-6-in-windows-10-add-python-path-281e7eae62a)
