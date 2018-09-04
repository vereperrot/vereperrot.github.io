---
layout: post
title:  "Deploying JekyII to Github"
date:   2018-09-04 00:01:57 +0800
categories: jekyll Github
---
## Steps
1. Change directory to your site
```
cd c:\my_site
```
2. Edit Gemfile
```
vi c:\my_site\Genfile
```
3. Comment **gem "jekyII"...**.
4. Update gem.
```
bundle update
```
5. Execute JekyII.
```
bundle exec jekyll serve
```
6. Clone your git page. Replace **user_name** with your real user name.
```
git clone git@github.com:user_name/user_name.github.io.git
```
7. Copy my_site\\* to user_name.github.io.git\\.
8. Copy an index.html from [jekyII example](https://github.com/jekyll/example). Save it to **user_name.github.io.git\index.html**.
9. Commit your site to Github. I create a batch file to do it. The content of file is like the following lines:
```
git add .
git commit -F message_file.txt
git push
```
10. Go to the URL http://user_name.github.io/. 
![perrot-blog](/assets/perrot-blog.PNG)
## Reference
* [github-pages](https://jekyllrb.com/docs/github-pages/)
* [jekyII example](https://github.com/jekyll/example)