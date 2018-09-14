---
layout: post
title:  "Flask SQLite Common Question"
date:   2018-09-14 00:01:57 +0800
categories: flask sqlite
---
## python-mysql-typeerror-nonetype-object-is-not-subscriptable
```python
from flaskr.db import get_db
db = get_db()
cursor = db.cursor()
cursor.execute(
    'SELECT occupancy_status'
    ' FROM parking_log'
    ' WHERE parking_space_no =?',
    (parking_space_no,)
)
row = cursor.fetchone()
while row:
    do_stuff()
    row = cursor.fetchone()
```

## Get distinct values
```sql
SELECT DISTINCT column_name,column_name
FROM table_name;
```

## Order by example
```sql
SELECT CompanyName, ContactName, City, Country
  FROM Supplier
 ORDER BY CompanyName
```

## Count having example
Reference [SQL COUNT() with HAVING](https://www.w3resource.com/sql/aggregate-functions/count-having.php).
```SQL
SELECT commission,COUNT(*)
FROM agents
GROUP BY commission
HAVING COUNT(*)>3;
```
