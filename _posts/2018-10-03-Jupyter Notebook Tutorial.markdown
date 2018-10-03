---
layout: post
title:  "Jupyter Notebook Tutorial"
date:   2018-10-03 00:01:57 +0800
categories: jupyter python
---
## Install method
### Method 1: [Install from Anaconda](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)
### Method 2: Install from command
* Install
I have python 2 and python3 on the same system. So I install Jupter Notebook with the command:
```
python3 -m pip install ipykernel
python3 -m ipykernel install --user
python3 -m pip install runipy
python3 -m pip install jupyter
```
**ipykernel provides the IPython kernel for Jupyter. IPython is en enhanced interactive Python shell.**
* Run it
```
python3 -m notebook
```
It will start your browser and go to the URL http://localhost:8888/tree.
### How to change Jupyter Notebook working directory 
```
python3 -m notebook --notebook-dir=c:\ML_Test
```

## Reference
* [Jupyter Notebook for Beginners: A Tutorial](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)
* [Is it ok having both Anacondas 2.7 and 3.5 installed in the same time?](https://stackoverflow.com/questions/37442494/is-it-ok-having-both-anacondas-2-7-and-3-5-installed-in-the-same-time)
* [Can I run Jupyter notebook cells in commandline?](https://stackoverflow.com/questions/35471894/can-i-run-jupyter-notebook-cells-in-commandline)
* [tkinter.TclError: no display name and no $DISPLAY environment variable](https://stackoverflow.com/questions/37604289/tkinter-tclerror-no-display-name-and-no-display-environment-variable)
