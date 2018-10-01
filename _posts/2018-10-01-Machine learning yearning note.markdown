---
layout: post
title:  "Machine learning yearning note"
date:   2018-10-01 00:01:57 +0800
categories: machine-learning
---
## 提升算法效能的方法
	* 較大的神經網絡
	* 更多的資料

## 設定開發與測試集
* 開發與測試集
	* 訓練集 - 學習算法使用
	* 開發集 - 調整參數，選擇特徵，做出關於學習算法的其他決定，一般叫做保持交叉驗證集
	* 測試集 - 用來評估算法效能，但不做出關於學習算法的其他決定，或參數的使用
	* 原則
		* 選擇的開發集與測試集會反應你未來期望的資料，例如：手機圖片與網站圖片
		* 你的開發與測試集需來自同一個佈點
		* 開發與測試集需要多大
			* 開發集要10000個資料，有機會改善0.1%
			* 測試集要大到足以帶來高信心

## 參考
[Machine learning yearning](https://github.com/amusi/machine-learning-yearning-cn/blob/master/Machine%20Learning%20Yearning%201-58%EF%BC%88by%20Andrew%20NG%EF%BC%89.pdf)