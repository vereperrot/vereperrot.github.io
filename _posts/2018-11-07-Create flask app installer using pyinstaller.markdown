---
layout: post
title:  "Create flask app installer using pyinstaller"
date:   2018-11-07 00:01:57 +0800
categories: flask python
---
## Environment
* Windows 10
* Python3

## Steps
1. Install
```
> pip install pyinstaller
```
2. Edit name.spec file
```
# -*- mode: python -*-
block_cipher = None
added_files = [
         ('.\\templates', 'templates'),
         ('.\\static', 'static')
         ]
a = Analysis(['__init__.py'],
             pathex=['D:\Temp\FlaskTest\flask\examples\tutorial\flaskr'],
             hiddenimports=['flask'],
             binaries=[],
             datas=added_files,
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='chartson',
          debug=False,
          strip=False,
          upx=True,
          console=True , icon='favicon.ico')
```
3. Create installer
```
> pyinstaller name.spec
```
4. It will create an executable file in a new dist folder under the current directory.
```
> dist\chartson.exe
```

## Errors
If you execute chartson.exe , it shows an message "ModuleNotFoundError: No module named 'flask'". You must append the module name to hiddenimports list. Then delete these folders **dist** and **build** and run ```pyinstaller name.spec```. Or using the command ```pyinstaller --clean name.spec```.

## Another option Pyfladesk
* You can create desktop application by using Flask and QtWebEngine
* Install pyfladesk and additional modules
```
python3 -m pip install pyfladesk
python3 -m pip install routes
```
* Clone pyfladesk repository
```
git clone https://github.com/smoqadam/PyFladesk.git
```
* Change to the example directory
```
cd PyFladesk\example
```
* Start the app.
```
python3 app.py
```
![PyFladesk hello app](\assets\PyFladesk hello app.PNG)
* Create the installer
```
pyinstaller -w -F --add-data "templates;templates" --add-data "static;static" app.py
```
* Start the app. It will open the app then close it automatically. I don't know why.
```
dist\app.exe
```
* I got en error in the event log.
![PyFladesk event log error](\assets\PyFladesk event log error.PNG)

## Use pyinstaller to create a console application
1. Edit console.py
```python
print('hello world')
```
2. Edit name.spec
```python
# -*- mode: python -*-
block_cipher = None
added_files = [
         ]
a = Analysis(['console.py'],
             pathex=['D:\pyinstaller_console_test'],
             hiddenimports=[],
             binaries=[],
             datas=added_files,
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='chartson',
          debug=False,
          strip=False,
          upx=True,
          console=True , icon='favicon.ico')
```
3. Copy a favicon.ico to the folder
4. Create a create_setup.bat and run it. Execute the application with the command ```dist\chartson.exe```.
```
pyinstaller name.spec
```
5. [Download the example](https://drive.google.com/open?id=1OHqtGAKRB5cwjWZN99iY8mSzSJVYH2lY)

## Use pyinstaller to create a tkinter window application
1. Edit window.py  
```python
from tkinter import *
window = Tk()
window.title("Welcome to LikeGeeks app")
window.mainloop()
```
2. Create a create_setup.bat.
```
pyinstaller -w name.spec
```
2. The remaining steps same as **Use pyinstaller to create a console application**.
3. [Download the example](https://drive.google.com/open?id=16WcfmqdtIwZycw13DE6ios92wK8wC7HG)

## Reference
* [pyinstaller Using Spec Files](https://pythonhosted.org/PyInstaller/spec-files.html)
* [Pyinstaller打包Python程序以及常见bugs](https://zhuanlan.zhihu.com/p/35338321)
* [pyinstaller打包过程中 no module named “”问题](https://www.jianshu.com/p/bf07565f0090)
* [PyFladesk](https://github.com/smoqadam/PyFladesk#pyfladesk)
* [Create one executable file for a Flask app with PyInstaller](https://elc.github.io/posts/executable-flask-pyinstaller/)
* [flask-application-built-using-pyinstaller-not-rendering-index-html](https://stackoverflow.com/questions/32149892/flask-application-built-using-pyinstaller-not-rendering-index-html)
* [用pyinstaller打包python程序](https://www.jianshu.com/p/8d13f70b770b)
* [Python GUI examples (Tkinter Tutorial)](https://likegeeks.com/python-gui-examples-tkinter-tutorial/#Create-your-first-GUI-application)
* [pyinstaller打包Flask(-)](https://izsk.me/2017/08/20/pyinstaller%E6%89%93%E5%8C%85Flask(-)/)
* [对写的python代码进行加密有什么好的实现方法？](https://www.zhihu.com/question/42636207)
* [使用pyinstaller將python指令碼打包成exe檔案](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/51581/)

