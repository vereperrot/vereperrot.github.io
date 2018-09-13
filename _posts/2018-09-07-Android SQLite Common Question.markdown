---
layout: post
title:  "Android SQLite Common Question"
date:   2018-09-07 00:01:57 +0800
categories: android sqlite
---
# get single row from a table
```java
public String getEmployeeName(String empNo) {
    Cursor cursor = null;
    String empName = "";
    try {
        cursor = SQLiteDatabaseInstance_.rawQuery("SELECT EmployeeName FROM Employee WHERE EmpNo=?", new String[] {empNo + ""});
        if(cursor.getCount() > 0) {
            cursor.moveToFirst();
            empName = cursor.getString(cursor.getColumnIndex("EmployeeName"));
        }
        return empName;
    }finally {
        cursor.close();
    }
}
```
# increment a column value
```java
//UPDATE {Table} SET {Column} = {Column} + {Value} WHERE {Condition}
UPDATE Products SET Price = Price + 1 WHERE ProductID = 50
```
# return all columns of a table
```java
SQLiteDatabase mDataBase;
(some code here...)
mDataBase = getReadableDatabase();
Cursor dbCursor = mDataBase.query(TABLE_NAME, null, null, null, null, null, null);
String[] columnNames = dbCursor.getColumnNames();
```
# add a column to a table
The simple way is uninstalling the application. It will delete the old database. The other way you can override the onUpgrade function. Go to the page [stackoverflow adding-a-new-column-in-sqlite-database](https://stackoverflow.com/questions/48293441/adding-a-new-column-in-sqlite-database) to see the detail steps.