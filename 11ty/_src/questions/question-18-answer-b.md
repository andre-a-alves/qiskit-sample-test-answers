---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-18
  - breakdown
  - answer-b
permalink: "questions/question-18/{{ page.fileSlug }}.html"

---


`op = Operator([[0,1]])`

While you can pass the matrix with which to intialize an operator, this code fragment only passes the top row of an $X$ gate as a parameter to the `Operator` constructor.
To return an $X$ gate operator, the code fragment would have to pass `[[0,1],[1,0]]` to represent $\big[\begin{smallmatrix} 0&1 \\\\ 1&0 \end{smallmatrix}\big]$.

#### Let's take a closer look:


```python
op = Operator([[0, 1]])
array_to_latex(op, prefix="\\text{Operator passed}: ")
```




$$
\text{Operator passed}: 
\begin{bmatrix}
0 & 1  \\
 \end{bmatrix}
$$



As you can see, answer B only passes the top half of the matrix for an $X$ gate.


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



Generating an $X$ gate would require an additional row in the matrix passed to the `Operator` constructor.