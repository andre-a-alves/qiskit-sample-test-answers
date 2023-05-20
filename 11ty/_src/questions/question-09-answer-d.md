---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-09
  - breakdown
  - answer-d
permalink: "questions/question-09/{{ page.fileSlug }}.html"

---


`qc.cz(0,1)`

This code fragment applies a $CZ$ gate, which is not a $CNOT$ gate.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)
qc.cz(0, 1)
qc.draw("mpl")
```




    
![png](output_27_0.png)
    



As you can see, by applying a $CZ$ gate, answer D adds a gate that is not a $CNOT$ gate.
