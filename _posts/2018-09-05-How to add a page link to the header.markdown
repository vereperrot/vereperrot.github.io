---
layout: post
title:  "How to add a page link to the header"
date:   2018-09-05 00:01:57 +0800
categories: jekyll
---
## Steps
1. Copy **your_site\about.md** to **your_site\about - Copy.md**. I rename this file **about - Copy.md** as **projects.md**.
2. Edit **projects.md**.
```
layout: page
title: Projects
permalink: /projects/
```
3. Refresh your site page in browser. It will show the new page link **Projects** at the header bar.
![projects-page](/assets/projects-page.PNG)
