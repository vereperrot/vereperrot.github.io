---
layout: post
title:  "Machine Learning Week 1"
date:   2018-10-01 00:01:57 +0800
categories: machine-learning
---
## 學習算法
* 監督學習
	* 樣本有相應的正確答案(訓練集)
	* 據樣本做預測
	* 回歸：推測連續值輸出
		* 舉例：
			* 預測房價
	* 分類；推出一組離散值結果
		* 舉例：
			* 預測乳腺癌
	* 分析：
		* 重要是能預測未來，便於做決策
		* 作者用了預測未來三個月能賣幾件相同的產品，做為回歸的舉例。判斷不同帳號是否曾被盜，作為分類的舉例
		* 學分類
			* 好處不用自己分類。可用在居家收納，同類的衣服放一起，像襪子、衣服、褲子自成一類
			* 反面的例子，亂中有序，依個人解讀不同，也可能有人無法解讀，判斷為亂。像房間亂，以個人來說那是有序，因你大致知道東西放哪，但對第一次來到你房間的人來說，那是一個亂。
			* 使用條件：異類資料
			* 相似資訊：類似數學的集合
			* 亂中有序與分類相異的地方，亂中有序不需再做分類，分類則需要。相同的地方，最初的資料都很亂，最後的資料皆有序
		* 學回歸
			* 好處預測明日氣溫是高或低
			* 反面的例子，相對於分類
			* 使用條件：同類資料
			* 相似資訊：類似匯率
			* 分類與回歸相異的地方，一個是確定最後會分類，一個是最後會有一個預測值。相同的地方，都為監督學習
* 無監督學習
	* 一堆未分組的數據，自動分組
	* 聚類算法
	* 舉例：
		* 谷歌新聞
		* 是否有特定基因
		* 什麼樣的機器易協同工作
		* 朋友分組
		* 雞尾酒算法，音頻分類
		* 細分市場
		* 糖尿病
* 算法
	* 定義：即工具，如何恰當使用這些工具
	* 單變量線性回歸算法
		* 線性:
			* 判斷方法：所有未知數的冪次項為一次
			* 線性方程式舉例：
				* x+7=6, x為未知數, 冪次為1
				* {x+y=4,x-2y=7} , x,y 為未知數, 冪次為1
			* 非線性方程式舉例:
				* x^2+3x+4=0, x為未知數, 冪次為2
				* sin(x)+x=4, x為未知數, 出現在超越函數內
		* 線性回歸: 是在資料點中找出規律、畫出一條直線的專業說法
		* 模型  
		![Linear Regression with One Variable_Model variable](/assets/Linear Regression with One Variable_Model variable.png)
		* 代價函數(cost function)
			* 代價函數越小，就代表了模型對訓練數據擬合的越好。即最優化經驗風險
			* 定義：計算整個訓練集**所有損失函數之和的平均值**
			* 損失函數(Loss/Error function)定義:計算單個訓練集之誤差
		* 低度下降(gradient descent)
			* 讓計算機自動找出最小代價函數時對應的theta值
	* 線性代數複習
	
	```octave
	% 1.Matrices and Vectors
	A = [1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]
	v = [1;2;3] 
	[m,n] = size(A)
	dim_A = size(A)
	dim_v = size(v)
	A_23 = A(2,3)
	
	% 2.Addition and Scalar Multiplication
	A = [1, 2, 4; 5, 3, 2]
	B = [1, 3, 4; 1, 1, 1]
	s = 2
	add_AB = A + B 
	sub_AB = A - B
	mult_As = A * s
	div_As = A / s
	add_As = A + s
	
	% 3.Matrix Vector Multiplication
	A = [1, 2, 3; 4, 5, 6;7, 8, 9] 
	v = [1; 1; 1] 
	Av = A * v
	
	% 4. Matrix Matrix Multiplication
	A = [1, 2; 3, 4;5, 6]
	B = [1; 2] 
	mult_AB = A*B
	
	% 5.Matrix Multiplication Properties
	A = [1,2;4,5]
	B = [1,1;0,2]
	% same as I = [1,0;0,1]. Initialize a 2 by 2 identity matrix
	I = eye(2)
	% IA=AI
	IA=I*A
	AI=A*I
	% AB not equal BA 
	AB=A*B
	BA=B*A
	
	% 6. Inverse and Transpose
	A = [1,2,0;0,5,6;7,0,9]
	A_trans = A'
	A =
	1   2   0
	0   5   6
	7   0   9
	A_trans =
	1   0   7
	2   5   0
	0   6   9
	% Take the inverse of A 
	A_inv = inv(A)
	% What is A^(-1)*A? 
	A_invA = inv(A)*A
	```
	![matrix-matrix-multi](/assets/matrix-matrix-multi.JPG)
## 參考
* [吳恩達的機器學習公開課中文筆記](https://scruel.gitee.io/ml-andrewng-notes/) - 比較詳盡，建議參考
* [吳恩達的機器學習教程中文筆記](https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes) - 科學符號有亂碼，不建議參考
* [知乎吳恩達的機器學習與深度學習](https://zhuanlan.zhihu.com/p/35940466)
