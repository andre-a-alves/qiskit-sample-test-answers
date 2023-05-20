---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-18
  - breakdown
  - answer-d
permalink: "questions/question-18/{{ page.fileSlug }}.html"

---


`op = Operator([[1,0,0,1]])`  

While you can pass the matrix with which to intialize an operator, this code fragment passes the entire $X$ gate as a single row matrix as a parameter to the Operator constructor.
To return an $X$ gate operator, the code fragment would have to pass `[[0,1],[1,0]]` to represent $\big[\begin{smallmatrix} 0&1 \\\\ 1&0 \end{smallmatrix}\big]$.
As written, this fragment passes $\big[\begin{smallmatrix} 0&1&1&0 \end{smallmatrix}\big]$.

#### Let's take a closer look:


```python
op = Operator([[1, 0, 0, 1]])
array_to_latex(op, prefix="\\text{Operator passed}: ")
```




$$
\text{Operator passed}: 
\begin{bmatrix}
1 & 0 & 0 & 1  \\
 \end{bmatrix}
$$



As you can see, answer D passes a 1x4 matrix instead of a 2x2 matrix.


```python
op = Operator([[0, 1], [1, 0]])
array_to_latex(op, prefix="\\text{Operator passed}: ")
```




$$
\text{Operator passed}: 
\begin{bmatrix}
0 & 1  \\
 1 & 0  \\
 \end{bmatrix}
$$



Generating an $X$ gate would require the initial matrix to be broken up into two separate rowns when passing to the `Operator` constructor.
