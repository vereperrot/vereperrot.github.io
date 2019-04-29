---
layout: post
title:  "How to solve remote desktop connection 'an internal error has occurred'"
date:   2019-04-29 00:01:57 +0800
categories: windows
---
It looks like you are not quit remote desktop connection correctly.

# Windows 10

1. Press hot key **WIN+X** to find **cmd for administrator**.
2. Type the command **netsh winsock reset**.
3. Restart computer typing **shutdown /r**.

# Windows 7

1. Press start menu to find **command prompt**.
2. Right clicking to show the context menu. Choosing **Run as administrator**.
3. Type the command **netsh winsock reset**.
3. Restart computer typing **shutdown /r**.

