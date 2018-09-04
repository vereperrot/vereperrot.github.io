---
layout: post
title:  "How to find a process used a port and close it"
date:   2018-09-02 00:01:57 +0800
categories: windows tool
---
![task-manager-details](/assets/task-manager-details.png)

## Finding a process used a port
Open the cmd console and type the following command to find all used port on Windows 10:
```
netstat -a -b
```
You will find something like this:
```
 TCP    0.0.0.0:8080           DESKTOP-PERROT:0      LISTENING
 [ApplicationWebServer.exe]
```
Remember the process name **ApplicationWebServer.exe**. We will find it in the task manager.
## Close the process
1. Open task manager.
2. Find the process **ApplicationWebServer.exe** in the details tab.
3. Select the process and click **End Task** menu item in the right click context menu.

