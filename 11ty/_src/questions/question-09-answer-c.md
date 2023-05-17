---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-09
  - breakdown
  - answer-c
permalink: "questions/question-09/{{ page.fileSlug }}.html"

---


`qc.mct([0],1)`

This applies a $CNOT$ gate by applying a multi-control $CNOT$ with the only control qubit being the first qubit.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)
qc.mct([0], 1)
qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, answer C creates a $CNOT$ gate.