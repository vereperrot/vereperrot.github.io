---
layout: post
title:  "Train a cascade classifier"
date:   2018-09-25 00:01:57 +0800
categories: computer-vision 
---
## Environment
* Python 2.7.15
* Windows 10
* opencv 3.4.3

## Prepare Steps
1. Clone the repository
```
git clone https://github.com/mrnugget/opencv-haar-classifier-training
```
2. Install opencv. Reference the post **face detection in python using webcam**
3. Samples
    * positive sample for detect the object
	* negative sample without the object
	* How many images? 5000 is better than 1000
	* factors:
	    * CPU power
		* Quality of images
		* Huge images
		* Time
		* Good samples

## Experiments Steps
1. Prepare 40 positive samples and 600 negative samples
2. Prepare 40 positive samples. They have to differ in lighting and background.
	* Collecting these pictures from:
		* From internet
		* Extract from video
		* Scan 
		* Take a picture
	* Crop pictures
3. Resize image with [FastStone Photo Resizer](http://www.faststone.org/FSResizerDownload.htm).
3. Put these positive samples into the directory **D:\Temp\opencv-haar-classifier-training\positive_images**
4. Write the path of image to a text file
```
find ./positive_images -iname "*.jpg" > positives.txt
```
Try the same function on Windows 10 with command:
```
dir /b/s positive_images\*.jpg>positives.txt
```
5. Prepare 600 negative samples.
	* Collecting these pictures from:
		* Extract from video
6. Save the list of paths to a text file
```
find ./negative_images -iname "*.jpg" > negatives.txt
```

## Reference
* [TRAIN YOUR OWN OPENCV HAAR CLASSIFIER](https://coding-robin.de/2013/07/22/train-your-own-opencv-haar-classifier.html)
* [createsamples.pl](https://github.com/mrnugget/opencv-haar-classifier-training/blob/master/bin/createsamples.pl)
* [not execute the createsamples.pl](https://github.com/mrnugget/opencv-haar-classifier-training/issues/17)
* [OpenCV haartraining 的xml檔製作](http://honoyang.pixnet.net/blog/post/25702657-opencv-haartraining-%E7%9A%84xml%E6%AA%94%E8%A3%BD%E4%BD%9C)
