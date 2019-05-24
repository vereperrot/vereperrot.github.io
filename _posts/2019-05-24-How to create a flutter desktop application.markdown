---
layout: post
title:  "How to create a flutter desktop application"
date:   2019-05-24 00:01:57 +0800
categories: flutter
---
# How to create a flutter desktop application

## Prepare
1. Upgrade the flutter latest release.
```
bin\flutter channel master
bin\flutter upgrade
```
2. Check environment.
```
bin\flutter doctor
```
3. Set enviroment variable.
```
set ENABLE_FLUTTER_DESKTOP=true
```
4. Show all connected devices
```
bin\flutter devices
```
5.Clone the flutter-desktop-embedding repository.
```
git clone https://github.com/google/flutter-desktop-embedding.git
```
6. Change directory to **example**
```
cd flutter-desktop-embedding\example
```
7. Get packages.
```
flutter packages get
```
8. Download build tools by your system.
```
flutter precache --windows
```

## Start
* Start your first desktop application.
``` 
flutter run
```
* The app code placed at **flutter-desktop-embedding\example\lib\main.dart**. When the flutter running, press **r** to hot reload after you modified the app code.
* If you want to change the title, you can modify the file **flutter-desktop-embedding\example\windows\flutter_embedder_example.cpp** to change it. Then quit the ```flutter run``` and restart it. The title changed.
* If you minimize the desktop application, it will quit automatically.
![perrot-flutter-desktop-example](asserts\perrot-flutter-desktop-example.png)

## Reference
* [Flutter for Desktop: Create and Run a Desktop Application](https://medium.com/flutter-community/flutter-for-desktop-create-and-run-a-desktop-application-ebeb1604f1e0)
* [flutter-desktop-embedding](https://github.com/google/flutter-desktop-embedding)

