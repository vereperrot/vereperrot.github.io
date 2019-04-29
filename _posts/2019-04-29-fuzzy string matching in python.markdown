---
layout: post
title:  "fuzzy string matching in python"
date:   2019-04-29 00:01:57 +0800
categories: python
---
# Prepare
```
>python -m pip install fuzzywuzzy
>python -m pip install python-Levenshtein
 error: Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools": http://landinghub.visualstudio.com/visual-cpp-build-tools
  ----------------------------------------
  ERROR: Failed building wheel for python-Levenshtein
```
I have to install Microsoft Visual C++ 14.0 to my computer. 
1. Type "Visual Studio Installer" in the windows search box and open it. My installer version is visaul studio 2017.
2. Go to **Workloads| Desktop development with C++**. Selecting the option **VC++ 2015.3 v14.00 (v140) toolset for desktop** to install. It will need 4.59 GB space. If your drive doesn't have enough spaces, you need to move some unused folders to another drive. 

# Example
```
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

fuzz.ratio("Catherine M Gitau","Catherine Gitau")
#91
fuzz.partial_ratio("Catherine M. Gitau","Catherine Gitau")
#100
#ignore order
fuzz.token_sort_ratio("Catherine Gitau M.", "Gitau Catherine")
#94
```

