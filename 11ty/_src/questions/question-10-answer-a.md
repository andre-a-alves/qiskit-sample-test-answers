---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-10
  - breakdown
  - answer-a
permalink: "questions/question-10/{{ page.fileSlug }}.html"

---


`qc.ccx(0,1,2)`

A $CCX$ gate is a Toffoli gate.
This is a $CCX$ gate with qubits 0 and 1 controlling qubit 2.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

# Insert code fragment from answer
qc.ccx(0, 1, 2)

qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, answer A creates a Toffoli gate.