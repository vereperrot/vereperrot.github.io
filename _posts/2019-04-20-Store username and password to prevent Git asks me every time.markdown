---
layout: post
title:  "Store username and password to prevent Git asks me every time"
date:   2019-04-20 00:01:57 +0800
categories: Github
---
Sometimes I push my github.io repository, git asks me enter user name and password. It's so waste time. Because I need to enter that every time. After I set the **credential.helper** option to store, then fill in username and password again. I will don't enter username and password next time. 

```
> git config --global credential.helper store
> git push
Username for 'https://github.com':
Password for 'https://[USER NAME]@github.com':
```

