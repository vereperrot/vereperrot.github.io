---
layout: post
title:  "python tips"
date:   2019-04-29 00:01:57 +0800
categories: python
---

# Quit a python script
```
import sys
sys.exit()
```

# List all available video devices
```
# Example 1
import cv2
def testDevice(source):
   cap = cv2.VideoCapture(source) 
   if cap is None or not cap.isOpened():
       print('Warning: unable to open video source: ', source)

testDevice(0) # no printout
testDevice(1) # prints message

# Example 2
def listAllAvailableVideoDevice():
    index = 0
    arr = []
    while True:
        cap = cv2.VideoCapture(index)
        if not cap.read()[0]:
            break
        else:
            arr.append(index)
        cap.release()
        index += 1
    return arr
```

# How to generate a executable file
1. ```python -m pip install pyinstaller```
2. ```pyinstaller -F .\hello.py -i search.ico -c --onedir --onefile --clean --noupx```
3. It will generate an executable file in dist folder. If the executable file needs some config files for executing. You have to copy them to the dist folder.
4. If I add -w option, pyinstaller generates an error message **Error loading Python DLL: C:\Users\Afro\AppData\Local\Temp_MEI51322\python35.dll(error code 193)**. I don't know why.
5. Reference [error-when-creating-executable-file-with-pyinstaller](https://stackoverflow.com/questions/38811966/error-when-creating-executable-file-with-pyinstaller)

# locate python executable file
```python
import sys
print(sys.executable)
```

# if then else statement on one line
```python
'Yes' if fruit == 'Apple' else 'No'
```

# test none type
```python
if variable is None:
```

# create a multiline string variable
```python
s = """
I will %s there
I will go %s
%s
""" % (string1, string2, string3)
```

# extract the substring between two markers
```python
import re
print re.search('AAA(.*?)ZZZ', 'gfgfdAAA1234ZZZuijjk').group(1)
```

## Reference
* [RegexOne - Learn Regular Expressions - Python](https://regexone.com/references/python)
* [Pythex: a Python regular expression editor](https://pythex.org/)

