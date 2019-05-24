---
layout: post
title:  "building a native app with flutter"
date:   2019-05-24 00:01:57 +0800
categories: flutter 
---
# building a native app with flutter
## Steps
1. Start Android Studio.
2. **File>Settings>Plugins.**
3. Select **Browse repositories…**, find the Flutter and install it.
4. Click Restart to restart Android Studio. 
5. **File> New> New Flutter Project**. And choose Flutter Application.
6. Type the project name **my_flutter_app** and click **Install SDK** to choose the installed path.
7. Choose a project location doesn't contain whitespace. If it contains whitespace, it will cause problems with the NDK tools.
8. Click **Next** button.
9. Add a support for Swift and Kotlin(if necessary). Click **Finish** button.

## FAQ
* Q. When I create flutter project, I get "Flutter create command was unsuccessful".
* A. 
1. Execute the command ```bin\flutter doctor --android-licenses```.
Error: The Flutter directory is not a clone of the GitHub project.
       The flutter tool requires Git in order to operate properly;
       to set up Flutter, run the following command:
       git clone -b stable https://github.com/flutter/flutter.git
2. git clone -b stable https://github.com/flutter/flutter.git
3. Execute the command again```bin\flutter doctor --android-licenses```. It will build flutter tool.
4. Then it worked when I create flutter project.

## Reference
* [How to Build Native App With Flutter — Step-by-Step Guide](https://expertise.jetruby.com/a-step-by-step-guide-to-building-native-app-with-flutter-c4ae3082e52a)
