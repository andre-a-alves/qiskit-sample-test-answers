---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-09
  - breakdown
  - answer-a
permalink: "questions/question-09/{{ page.fileSlug }}.html"

---


`qc.cx(0,1)`

A $CX$ gate is a $CNOT$ gate, since an $X$ gate is also referred to as a $NOT$ gate.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)
qc.cx(0, 1)
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, answer A creates a $CNOT$ gate.