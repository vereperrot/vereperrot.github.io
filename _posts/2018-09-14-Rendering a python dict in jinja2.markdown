---
layout: post
title:  "Rendering a python dict in jinja2"
date:   2018-09-14 00:01:57 +0800
categories: python jinja2
---
{% highlight python %}
{% raw %}
   url_list = [{'target': 'http://10.58.48.103:5000/', 'clicks': '1'}, 
                {'target': 'http://slash.org', 'clicks': '4'},
                {'target': 'http://10.58.48.58:5000/', 'clicks': '1'},
                {'target': 'http://de.com/a', 'clicks': '0'}]
    #Python 2.7

    {% for key, value in url_list.iteritems() %}
        <li>{{ value["target"] }}</li> 
    {% endfor %}
    #Python 3

    {% for key, value in url_list.items() %}
        <li>{{ value["target"] }}</li> 
    {% endfor %}

{% endraw %}
{% endhighlight %}
