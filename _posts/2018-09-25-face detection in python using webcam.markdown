---
layout: post
title:  "face detection in python using webcam"
date:   2018-09-25 00:01:57 +0800
categories: python face-detection computer-vision
---
## Environment
* Python 2.7.15
* Windows 10
* opencv 3.4.3
* webcam

## Steps
0. Start command prompt
1. Clone the repository
```
git clone https://github.com/shantnu/Webcam-Face-Detect.git
```
2. Change to the project folder
```
cd Webcam-Face-Detect
```
3. Create virtual environment
``` 
virtualenv env
```
4. Enter env virtual environment
``` 
env\Scripts\activate.bat
```
5. Go to the [sourceforge site](https://sourceforge.net/projects/opencvlibrary/files/). Enter opencv-win category and download **opencv-3.4.3-vc14_vc15.exe**. Extract it. 
6. Copy C:\Users\user\Downloads\opencv\build\python\2.7\x64\cv2.pyd to the directory C:\Python27\Lib\site-packages
7. Start Python IDLE and type:
```
import cv2
print cv2.__version__
```
8. Restart command prompt
9. Change to the project folder
```
cd Webcam-Face-Detect
```
9. Create webcam_cv3.py.   

```python
import cv2
import sys
import logging as log
import datetime as dt
from time import sleep

cascPath = "haarcascade_frontalface_default.xml"
faceCascade = cv2.CascadeClassifier(cascPath)
log.basicConfig(filename='webcam.log',level=log.INFO)

# Or video filename as parameter
# Opencv can not decode compressed video, install ffmpeg to decode.
video_capture = cv2.VideoCapture(0)
#Front
anterior = 0

while True:
    if not video_capture.isOpened():
        print('Unable to load camera.')
        sleep(5)
        pass

    # Capture frame-by-frame
    ret, frame = video_capture.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

	# scaleFactor 10%, 1.05 = 5% increase the chance of a matching size
    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(30, 30)
    )

    # Draw a rectangle around the faces
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    if anterior != len(faces):
        anterior = len(faces)
        log.info("faces: "+str(len(faces))+" at "+str(dt.datetime.now()))


    # Display the resulting frame
    cv2.imshow('Video', frame)


    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    # Display the resulting frame
    cv2.imshow('Video', frame)

# When everything is done, release the capture
video_capture.release()
cv2.destroyAllWindows()

```
10. Fire face detection 
```
C:\Python27\python webcam_cv3.py
```
11. Face detection from a video file
```python
video_capture = cv2.VideoCapture("Top 15 Funniest Friends Moments.mp4")
```
![python-face-detection-video](/assets/python-face-detection-video.PNG)
12. You can find more OpenCV's pre-trained classifiers in **C:\Users\user\Downloads\opencv\sources\data\haarcascades** folder

## Reference
* [Install OpenCV-Python in Windows](https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_setup/py_setup_in_windows/py_setup_in_windows.html)
* [Pip and virtualenv on Windows](https://programwithus.com/learn-to-code/Pip-and-virtualenv-on-Windows/)
* [GitHub Webcam-Face-Detect](https://github.com/shantnu/Webcam-Face-Detect)
