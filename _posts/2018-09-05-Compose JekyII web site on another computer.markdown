---
layout: post
title:  "Compose JekyII web site on another computer"
date:   2018-09-05 00:01:57 +0800
categories: jekyll
---
## Steps
1. [Download Ruby with DEVKIT](https://rubyinstaller.org/downloads/)
2. Install rubyinstaller-devkit-2.5.1-2-x64 with default settings except:
![ruby-setup-screenshot](/assets/ruby-setup-screenshot.PNG)
3. Clone the Github pages
```
git clone git@github.com:user_name/user_name.github.io.git
```
4. Install bundler.
```
gem install jekyll bundler
```
5. Install related packages
```
cd user_name.github.io
bundle install
```
9. Now I can start my web site. And go to the URL http://127.0.0.1:4000/ to see my home page.
```
bundle exec jekyll serve
```

## Reference
* [Use Jekyll to build a static HTML web site](http://perrot.github.io/jekyll/2018/09/01/Use-Jekyll-to-build-a-static-HTML-web-site.html)
