---
layout: post
title:  "Chapter 6 Beer, Farms , and Peas"
date:   2018-09-28 00:01:57 +0800
categories: data-science r-programming
---
## Note
1. Install R-3.5.1-win.exe on Windows 10.
2. Click the shortcut **R x64 3.5.1** on Desktop.
3. Type command in RGui:  
```R
us <- read.DIF("clipboard",transpose=TRUE)
```
4. Open nst-est2017-01.xlsx. You can download this file from **[State Population Totals and Components of Change: 2010-2017](https://www.census.gov/data/tables/2017/demo/popest/state-total.html#par_textimage_1574439295)**. Click the linke **Annual Estimates of the Resident Population for the United States, Regions, States, and Puerto Rico: April 1, 2010 to July 1, 2017 (NST-EST2017-01)** to download it.
5. Select 50 states
![Select 50 states](/assets/Select 50 states.JPG)
6. Copy data to clipboard with **Ctrl+C**
7. Press **Enter** key to execute the read command in RGui.
8. Now we can check data via type the variable name.
![r-console-check-50states](/assets/r-console-check-50states.JPG)
9. Try commands:
```R
mean(us$V2)
median(us$V2)
mode(us$V2)
sd(us$V2)
var(us$V2)
```
10. Show hist diagram. It will show 10 bars:
```R
hist(us)
```
![hist](/assets/hist.JPG)
11. Show hist with breaks parameter. It will show 20 bars:
```R
hist(us,breaks=20)
```
![hist-breaks](/assets/hist-breaks.JPG)
12. Draw normal distribution histgram. Usage:rnorm(n,mean,sd)
```R
hist(rnorm(50,500.7451,283.2001))
```
![hist-rnorm](/assets/hist-rnorm.JPG)

