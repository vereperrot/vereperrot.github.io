---
layout: post
title:  "Chapter 5 rows and columns"
date:   2018-09-27 00:01:57 +0800
categories: data-science r-programming
---
## Note
* rows: cases or instances
* columns: attributes or variables
* rows and columns: data frame in R
* code:

```r
myFamilyIQ <- c(100,110,103,111,50)
myFamilyNames <- c("Dad","Mom","Sis","Bro","Dog")
myFamilyAges <- c(43,42,12,8,5)
myFamilyGenders <- c("Male","Female","Female","Male","Female")
myFamilyWeights <- c(188,136,84,61,44)
myFamily <- data.frame(myFamilyNames ,+
myFamilyAges ,myFamilyGenders ,myFamilyWeights ,myFamilyIQ )
myFamily
str(myFamily)
summary(myFamily)

# copy myFamilyAges vector to another storage
myFamily$myFamilyAges 
myFamilyAges <- c(myFamilyAges ,11)
myFamilyAges 
myFamily$myFamilyAges 
# try to add item to the copied vector
myFamily$myFamilyAges <- c(myFamily$myFamilyAges,11)
# output is: Error: replacement has 6 rows, data has 5
```
![r-doc-rows-columns](/assets/r-doc-rows-columns.JPG)

## Question
* Why use the median?  
A mean may be skewed by a small number of extremely high or low values. Median may be a better number.Why use the median?
* What is mode?  
The mode of a set of data values is the value that appears most often.

## Reference
* [Central tendency](https://en.wikipedia.org/wiki/Central_tendency)
* [Median](https://en.wikipedia.org/wiki/Median)
* [Mode (statistics)](https://en.wikipedia.org/wiki/Mode_(statistics))
* [Arithmetic mean](https://en.wikipedia.org/wiki/Arithmetic_mean)
* [Relational model](https://en.wikipedia.org/wiki/Relational_model)
* [Data Frames](https://stat.ethz.ch/R-manual/R-devel/library/base/html/data.frame.html)
* [Impatient R](https://www.burns-stat.com/documents/tutorials/impatient-r/)
* [khanacademy mean,median & mode example](https://www.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap/measuring-center-quantitative/v/mean-median-and-mode)
