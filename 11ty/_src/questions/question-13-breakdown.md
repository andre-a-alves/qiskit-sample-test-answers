---
title: Answers Breakdown
layout: layouts/breakdown.njk
tags:
  - question-13
  - breakdown_base
permalink: "questions/question-13/{{ page.fileSlug }}.html"

---


Instead of explaining every answer option, this question is best explained by showing the critical path's depth.

First, we build the circuit and draw it so we can see it.


```python
qc = QuantumCircuit(2, 2)

qc.h(0)
qc.barrier(0)
qc.cx(0, 1)
qc.barrier([0, 1])

qc.draw("mpl")
```




    
![png](output_11_0.png)
    



Just in case the barriers serve as a distraction, we can remove them since they do not affect the circuit's execution and do not perform an operation like a gate does.


```python
qc = QuantumCircuit(2, 2)

qc.h(0)
qc.cx(0, 1)

qc.draw("mpl")
```




    
![png](output_13_0.png)
    



Looking at this simplified circuit, we see that the longest (critical) path is across the first qubit, which must execute two gates.
Therefore, the circuit depth is 2, which is answer A.
