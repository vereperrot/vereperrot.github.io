---
layout: post
title:  "python tips"
date:   2019-04-29 00:01:57 +0800
categories: python
---
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

