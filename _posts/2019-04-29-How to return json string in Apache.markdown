---
layout: post
title:  "How to return json string in Apache"
date:   2019-04-29 00:01:57 +0800
categories: apache json
---

# Steps
1. Add string **AddType application/json .json** to Apache configuation file **/etc/apache2/mods-available/mime.conf**.
2. Enable mime module via **a2enmod mime**.
3. PHP files don't add any **echo** html tags string.
```
<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>
```

# Reference
* [responsejson-returns-text-html-as-content-type](https://stackoverflow.com/questions/24951314/responsejson-returns-text-html-as-content-type)
* [js_json_php](https://www.w3schools.com/js/js_json_php.asp)

