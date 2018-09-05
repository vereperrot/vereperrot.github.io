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
twitter_username: myawesome
github_username:  myawesome
```

# You have already activated X, but your Gemfile requires Y
I got an error after I started Jekyll service.
```
user_name.github.io>jekyll serve -w 
 You have already activated public_suffix 3.0.3, but your Gemfile requires public_suffix 2.0.5. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```
Because JekyII command version is higher then a Gemfile in the location. You need  to prepend JekyII command with bundle exec.
```
bundle exec jekyll serve
```

# How to display categories in JekyII site
1. Add following lines to **_layout/post.html**.
```
Tagged with 
{% for category in page.categories %}
  <a href="/{{ category | slugize }}/">
    {{ category }}
  </a> 
{% endfor %}
```

# How to display all categories in JekyII site
```
{% for category in site.categories %}
    <li><a href="{{category.url}}"><strong>{{category|first}}</strong></a></li>
{% endfor %}
```
