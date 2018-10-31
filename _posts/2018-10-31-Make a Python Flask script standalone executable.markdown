---
layout: post
title:  "Make a Python Flask script standalone executable"
date:   2018-09-02 00:01:57 +0800
categories: Python Flask
---
1. python3 -m pip install pyinstaller
2. C:\Users\user>cd C:\Users\user\AppData\Local\Programs\Python\Python36\Scripts
3. Make a executable file
```
pyinstaller  D:\Temp\FlaskTest\flask\examples\tutorial\flaskr\__init__.py  -F  -w  -i C:\Octave\Octave-4.4.1\include\wx-3.0\wx\msw\std.ico -n MYPARKINGSYS  -p C:\Users\user\AppData\Local\Programs\Python\Python36\Lib\site-packages
```
4. Copy folder **templates** and **static** to directory **C:\Users\user\AppData\Local\Programs\Python\Python36\Scripts\dist**
5. Execute file MYPARKINGSYS.exe.
6. It shows en error message **Failed to execute script __init__**.  
![Failed to execute script __init__](/assets/Failed to execute script __init__.PNG)

## Reference
* [LINK](https://blog.csdn.net/u013314786/article/details/74392152)
* [Make the Project Installable](http://flask.pocoo.org/docs/1.0/tutorial/install/)