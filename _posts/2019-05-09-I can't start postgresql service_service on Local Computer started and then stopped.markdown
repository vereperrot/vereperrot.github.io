---
layout: post
title:  "I can't start postgresql service_service on Local Computer started and then stopped"
date:   2019-05-09 00:01:57 +0800
categories: postgresql 
---
# Problem
When I start pgadmin and try to open a database. I got a message **could not connected to server:No route to host is the server running on host "172.19.13.73" and accepting TCP/IP connections on port 5432**. I find the solution from [connect_error](https://www.pgadmin.org/docs/pgadmin4/dev/connect_error.html) page. The postgres server doesn't run I have to start it.

Press Win key to open start menu. And type service into the **Search programs and files** input box. Open the services window. Find **postgresql** service and start it. It shows a message **service on Local Computer started and then stopped. Some services stop automatically if they are not in use by other services or programs**.

# Solution
1. Open run dialog ant type "eventvwr.msc" to open **Event Viewer**.
2. Go to **Event Viewer(Local)| Windows Logs| Application**. Finding error items and I got bellow information.
```
Timed out waiting for server startup
```
3. Reinstall postgresql to the latest version.
