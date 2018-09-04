---
layout: post
title:  "JekyII Common Question"
date:   2018-09-02 00:01:57 +0800
categories: jekyll
---
# How to add image to a post
1. Create a folder to your site folder and name it as assets. The directory will be **your_site\assets**.
2. Add an image link to the post. Like this:
```
![image tooltip here](/assets/image.jpg)
```

# How to change the title
Edit the file your_site\_config.yml. This file contains all settings. I can modify the title of site and email. After you modified this file, you need to restart jekyll to take affect.
```
title: My awesome title
email: myawesome@mail.com
```
