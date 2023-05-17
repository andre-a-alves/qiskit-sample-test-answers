---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-18
  - breakdown
  - answer-c
permalink: "questions/question-18/{{ page.fileSlug }}.html"

---


```python
qc = QuantumCircuit(1)
qc.x(0)
op = Operator(qc)
```

This answer works a little differently than the other three.
Instead of passing a matrix representing the matrix we want for the operator, this answer passes a `QuantumCircuit` that contains the appropriate gate.
`Operator` can accept a `QuantumCircuit` as a construction parameter, and it will return an `Operator` that represents a matrix that would perform the same operation as that circuit.
Since this code passes a circuit with only a single $X$ gate, that is what the `Operator` object will represent.

#### Let's take a closer look:

As a good sign, this code executed without throwing any exceptions.

If we draw the quantum circuit for `qc`, we confirm the entire circuit only contains a single $X$ gate.


```python
qc.draw("mpl")
```




    
![png](output_25_0.png)
    



Since that is what we passed to the `Operator` constructor, that will be the entire opertion the `Operator` object will represent.


```python
array_to_latex(op, prefix="\\text{Operator passed}: ")
```




$$
\text{Operator passed}: 
\begin{bmatrix}
0 & 1  \\
 1 & 0  \\
 \end{bmatrix}
$$



As you can see above, this produced an `Operator` that represents an $X$ gate.