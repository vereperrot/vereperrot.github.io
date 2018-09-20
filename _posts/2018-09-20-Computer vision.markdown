---
layout: post
title:  "Computer vision"
date:   2018-09-20 00:01:57 +0800
categories: CV python
---
## Environment
* Windows 10
* Python 2.7
![architecture](/assets/architecture.jpg)

## Steps
1. pip install mahotas
2. install imread on Windows
    1. Go to [How To Install Mahotas-imread](https://imread.readthedocs.io/en/latest/install.html)
    2. Go to [binary packages of imread ](https://www.lfd.uci.edu/~gohlke/pythonlibs/#imread)
    3. Download imread?0.6.1?cp27?cp27m?win_amd64.whl
    4. pip install imread?0.6.1?cp27?cp27m?win_amd64.whl
2. pip install matplotlib
2. read image code:  

```python
import mahotas as mh

image=mh.imread('pexels-photo-531880.jpeg')
image=image-image.mean()
from matplotlib import pyplot as plt
plt.imshow(image)
plt.show()
```
![cv-read-image](/assets/cv-read-image.png)
3. otsu
```python
import mahotas as mh
import numpy as np
image=mh.imread('architecture.jpg')
image=mh.colors.rgb2gray(image,dtype=np.uint8)
from matplotlib import pyplot as plt
thresh=mh.thresholding.otsu(image)
plt.imshow(image>thresh)
plt.gray()
plt.show()
```
![cv-otsu](/assets/cv-otsu.png)
4. otsubin
```python
import mahotas as mh
import numpy as np
image=mh.imread('architecture.jpg')
image=mh.colors.rgb2gray(image,dtype=np.uint8)
from matplotlib import pyplot as plt
otsubin=(image>thresh)
otsubin=mh.open(otsubin,np.ones((15,15)))
plt.imshow(otsubin)
plt.gray()
plt.show()
```
![cv-otsubin](/assets/cv-otsubin.png)
5. rc
```python
import mahotas as mh
import numpy as np
image=mh.imread('architecture.jpg')
image=mh.colors.rgb2gray(image,dtype=np.uint8)
from matplotlib import pyplot as plt
thresh=mh.thresholding.rc(image)
plt.imshow(image>thresh)
plt.gray()
plt.show()
```
![cv-rc](/assets/cv-rc.png)
