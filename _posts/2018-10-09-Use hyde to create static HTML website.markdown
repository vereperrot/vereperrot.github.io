---
layout: post
title:  "Use hyde to create static HTML website"
date:   2018-10-09 00:01:57 +0800
categories: hyde python
---
## Summary
hyde is a static HTML website generator written in python. It is like Jekyll.

## Install Python
I can install Python 2 and 3 on the same OS. Check out [How to install Python 2.7.15 and 3.6.5 on Windows 10](). hyde based on Python2. The important thing is Python 2 executable file name has to python.exe.

## Use hyde
1. Open the cmd console and enter the command:  
```pip install hyde```.
2. Create a site with:  
```hyde -s your_site create```.
3. Generate the site:  
```
>cd your_site
>hyde gen
16:27:41 hyde.engine Reading site configuration from [C:\Users\user\your_site\site.yaml]
16:27:41 hyde.engine Reading site contents
16:27:41 hyde.engine Generating site at [c:\users\user\your_site]
16:27:42 hyde.engine Configuring the template environment
16:27:42 hyde.engine Generating site to [c:\users\user\your_site\deploy]
16:27:43 hyde Generation complete.
```
4. Start the website. Go to URL http://localhost:8080/ to view your site.
```
>hyde serve
```
![hyde-home](/assets/hyde-home.JPG)

## Troubleshooting
### Create site error **raise HydeException(message), None, tb**
hyde only support python 2. Running hyde in python 3. It will generate an error:
```
C:\Users\user>hyde -s zhihau create
Traceback (most recent call last):
  File "c:\users\user\appdata\local\programs\python\python36\lib\runpy.py", line 193, in _run_module_as_main
    "__main__", mod_spec)
  File "c:\users\user\appdata\local\programs\python\python36\lib\runpy.py", line 85, in _run_code
    exec(code, run_globals)
  File "C:\Users\user\AppData\Local\Programs\Python\Python36\Scripts\hyde.exe\__main__.py", line 5, in <module>
  File "c:\users\user\appdata\local\programs\python\python36\lib\site-packages\hyde\main.py", line 6, in <module>
    from hyde.engine import Engine
  File "c:\users\user\appdata\local\programs\python\python36\lib\site-packages\hyde\engine.py", line 5, in <module>
    from hyde.exceptions import HydeException
  File "c:\users\user\appdata\local\programs\python\python36\lib\site-packages\hyde\exceptions.py", line 10
    raise HydeException(message), None, tb
                                ^
SyntaxError: invalid syntax
```
### pip install hyde failed **Fatal error in launcher: Unable to create process **
Try this command:
```
python -m pip install hyde
```
### Can not serve the website. It shows the following message:
```
>hyde serve
13:38:43 hyde.engine Reading site configuration from [C:\Users\Adrian\Downloads\your_site\site.yaml]
13:38:43 hyde [Errno 10013] An attempt was made to access a socket in a way forbidden by its access permissions
```
It means that the other process used that port. Please reference [How to find a process used a port and close it?]() to end a process that used 8080 port.
### I do not add the publish setting to site.yaml.
```
> hyde publish -p github
14:23:55 hyde.engine Reading site configuration from [web_site\site.yaml]
14:23:55 hyde.engine.publisher Cannot find the publisher configuration: github
14:23:55 hyde 'Config' object has no attribute 'publisher'
```
### I set a wrong path in site.yaml
```
>hyde publish -p github
14:30:24 hyde.engine Reading site configuration from [web_site\site.yaml]
14:30:24 hyde [Error 267] The directory name is invalid
```
## Publishing the web site
Add following text to site.yaml.
```
publisher:
    github:
        type: hyde.ext.publishers.dvcs.Git
        path: ..\your_gitname.github.com
        url: git@github.com: your_gitname  / your_gitname  .github.com.git
```
Make sure the path and url are correct. 

## Reference
http://hyde.github.io/
