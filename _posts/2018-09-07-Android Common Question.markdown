---
layout: post
title:  "Android Common Question"
date:   2018-09-02 00:01:57 +0800
categories: android
---
## Android Functions 
# Convert string to int
```java
Integer.parseInt() 
```

# Set background for textview
```java
setBackgroundColor(Color.YELLOW);
```

# Show a toast
```java
Toast toast = Toast.makeText(getApplicationContext(), "This is a message displayed in a Toast", Toast.LENGTH_SHORT); toast.show();
```

## Android Studio
* Build debug apk  
![android studio build debug apk](/assets/android studio build debug apk.PNG)

## ADB Commands 
* Install apk
```
MyApplication\app\build\outputs\apk\debug>adb install app-debug.apk
```
* Install apk **Failure [INSTALL_FAILED_ALREADY_EXISTS]**. You have to uninstall the applicatoin first.
* Uninstall apk
```
MyApplication\app\build\outputs\apk\debug>adb uninstall com.example.application
```
* Install apk **Failure [INSTALL_FAILED_UPDATE_INCOMPATIBLE]**. You have installed a debug application on the device. You need to uninstall it then install the release application.
* Install release apk **Failure [INSTALL_PARSE_FAILED_NO_CERTIFICATES]**.APK Signature Scheme v2 is a new feature in android 7.0. You fix it by checked signature verions V1 optioin.
```
MyApplication\app\release>adb install app-release.apk
```
![android studio v1 signature](/assets/android studio v1 signature.PNG)

## JNI Functions
* Load JNI function from MyApplication\app\libs\JNILibrary.so.
* Find keyword **System.loadLibrary("JNILibrary");**