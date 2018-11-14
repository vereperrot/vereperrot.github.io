---
layout: post
title:  "How to use redis database on Windows 10"
date:   2018-11-14 00:01:57 +0800
categories: redis database
---
## How to use redis database on Windows 10
1. [Download Redis-x64-3.2.100.msi](https://github.com/MicrosoftArchive/redis/releases) and .
2. Install it.
3. Check **add path** option.
4. Check **allow this application to pass through the firewall.
5. Start redis server
```
redis-cli.exe -h 127.0.0.1 -p 6379
```

## Reference
* [Redis](https://zh.wikipedia.org/wiki/Redis)
* [資料庫的好夥伴：Redis](https://blog.techbridge.cc/2016/06/18/redis-introduction/)
* [win10安装redis及redis客户端使用方法](https://blog.csdn.net/office5845/article/details/78017925)
