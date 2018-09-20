---
layout: post
title:  "neural network short guide"
date:   2018-09-20 00:01:57 +0800
categories: neural-network 
---
## Artificial neuron type:
* The perceptron
    * Work  
    ![perceptron-work](/assets/perceptron-work.png)
    ![perceptron-fomula](/assets/perceptron-fomula.png)
    * Example: go to festival
        * Weather(X1):Good(1), Bad(0). W1=6
        * Accompany(X2):Go(1), No(0).  W2=2
        * Transit(X3):v(1), x(0).      W3=2
        * Threshold=5
    * Rule: change the Weight and Threshold variables to build differenct decision model. The Threshold variable decreased, your desire to go to the festival has increased.
    * Complex perceptrons: x, w are vectors. b is bias.  
    ![complex-perceptrons](/assets/complex-perceptrons.png)
    ![perceptron-fomula-simplify](/assets/perceptron-fomula-simplify.png)
* The sigmoid neuron
