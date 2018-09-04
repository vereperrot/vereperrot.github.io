---
layout: post
title:  "Customizing my JekyII theme"
date:   2018-09-02 00:01:57 +0800
categories: jekyll theme
---
## Steps
1. Locate the default theme
```
bundle show minima
```
2. It will show **C:\Ruby\lib\ruby\gems\2.5.0\gems\minima-2.5.0**. The theme's directory will be:
```
├─assets
├─_includes
├─_layouts
└─_sass
    └─minima
```
3. Override the default theme. If you want to override the home page, create a _layouts folder into your site directory. Ex.**my_site\_layouts**. Then copy C:\Ruby\lib\ruby\gems\2.5.0\gems\minima-2.5.0\_layouts\home.html to my_site\_layouts. Edit home.html. Modify **via RSS** as **via something**. 
![modify-theme](/assets/modify-theme.PNG)

## Reference
[themes|JekyII](https://jekyllrb.com/docs/themes/)
