---
title: Answers Breakdown
layout: layouts/breakdown.njk
tags:
  - question-19
  - breakdown_base
permalink: "questions/question-19/{{ page.fileSlug }}.html"

---


First we begin by entering the given code to create the two operators themselves.


```python
op_a = Operator(XGate())
op_b = numpy.exp(1j * 0.5) * Operator(XGate())
```

Next, we look at the first operator `op_a`.


```python
array_to_latex(op_a, prefix="op_a: ")
```




$$
op_a: 
\begin{bmatrix}
0 & 1  \\
 1 & 0  \\
 \end{bmatrix}
$$



Followed by the second operator `op_b`.


```python
array_to_latex(op_b, prefix="op_b: ")
```




$$
op_b: 
\begin{bmatrix}
0 & 0.8775825619 + 0.4794255386 i  \\
 0.8775825619 + 0.4794255386 i & 0  \\
 \end{bmatrix}
$$

