---
layout: post
title:  "face detection from an image in python"
date:   2018-09-25 00:01:57 +0800
categories: python face-detection computer-vision
---
## Environment
* Python 2.7.15
* Windows 10
* opencv 3.4.3

## Steps
0. Start command prompt
1. Install opencv. Reference the post **face detection in python using webcam**
2. Create folder Image-Face-Detect
3. Change to Image-Face-Detect folder
```
cd Image-Face-Detect
```
4. Copy files **haarcascade_frontalface_default.xml** and **haarcascade_eye.xml** from C:\Users\user\Downloads\opencv\sources\data\haarcascades folder to D:\Temp\Image-Face-Detect
4. Create file **image_cv3.py**  

```python
import numpy as np
import cv2
from matplotlib import pyplot as plt

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')

img = cv2.imread('harry-meghan-15.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(gray, 1.1, 5)


for (x,y,w,h) in faces:
    cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
    roi_gray = gray[y:y+h, x:x+w]
    roi_color = img[y:y+h, x:x+w]
    eyes = eye_cascade.detectMultiScale(roi_gray)
    for (ex,ey,ew,eh) in eyes:
        cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)

cv2.imshow('img',img)
# waitKey(0) will display the window infinitely until any keypress
cv2.waitKey(0)
if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cv2.destroyAllWindows()
```
7. Start face detection
```
c:\Python27\python.exe image_cv3.py
```
![python-face-detection-image-1.1](/assets/python-face-detection-image-1.1.PNG)
6. If I decrease the scaleFactor parameter to 1.01, I will get more detect regions.
![python-face-detection-image-1.01](/assets/python-face-detection-image-1.01.PNG)

## Parameters
* scaleFactor: Parameter specifying how much the image size is reduced at each image scale.
* minNeighbors: Parameter specifying how many neighbors each candidate rectangle should have to retain it.This parameter will affect the quality of the detected faces: **higher value** results in less detections but with higher quality.
* minSize : Minimum possible object size. Objects smaller than that are ignored.

## Reference
* [OBJECT DETECTION : FACE DETECTION USING HAAR CASCADE CLASSFIERS](https://www.bogotobogo.com/python/OpenCV_Python/python_opencv3_Image_Object_Detection_Face_Detection_Haar_Cascade_Classifiers.php)
