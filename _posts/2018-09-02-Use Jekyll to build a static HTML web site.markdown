---
layout: post
title:  "Use Jekyll to build a static HTML web site"
date:   2018-09-02 00:01:57 +0800
categories: jekyll
---
## Build site steps
1. [Download Ruby with DEVKIT](https://rubyinstaller.org/downloads/)
2. Install rubyinstaller-devkit-2.5.1-2-x64 with default settings except:
![ruby-setup-screenshot](/assets/ruby-setup-screenshot.PNG)
3. Open cmd console and enter the following command:
```
gem install jekyll
```
4. Install a syntax highlighter. You can install the Ruby-based Rouge or the Python-based Pygments. The difference is Rouge suppports less languages then Pygments. If you like Rouge, you can enter the following command:
```
gem install rouge
```
5. I like Pygments. I need to install Python 2.7 first. Then I can install the tool with:
```
python -m pip install Pygments
```
6. Jekyll has a cool feature. It will monitor the site folder for changes and rebuild the site. Install it with:
```
gem install wdm
```
7. Install bundler.
```
gem install jekyll bundler
```
7. Generate a site.
```
jekyll new my_site
```
8. Change directory to the site folder. Then install all dependency package. Building the site with:
```
cd my_site
bundle install
jekyll build
```
9. Now I can start my web site. And go to the URL http://127.0.0.1:4000/ to see my home page.
```
jekyll serve -w
```

## Troubleshooting
#### When I generate site, I got an "Could not load Bundler. Bundle install skipped." error.
```
C:\Users\user_name>jekyll new my_site
Could not load Bundler. Bundle install skipped.
New jekyll site installed in C:/Users/user_name/my_site.
```
**I have to install bundler. It will work OK**
```gem install jekyll bundler```

#### When I build the site, I got an "in `block in verify_gemfile_dependencies_are_found!': Could not find gem 'minima" error.
```
gem install minima
```
Then I try to fire command ```jekyll build``` again. I got another error message "Could not find gem 'tzinfo-data x64-mingw32' in any of the gem sources listed in your Gemfile". Try the following command to fix it.
{% highlight batch %}
bundle install
{% endhighlight %}

## Reference
* [Run Jekyll on Windows](http://jekyll-windows.juthilo.com)
* [Jekyll Command Line Usage](https://jekyllrb.com/docs/usage/)
