---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-09
  - breakdown
  - answer-b
permalink: "questions/question-09/{{ page.fileSlug }}.html"

---


`qc.cnot(0,1)`

This directly applies a $CNOT$ gate.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)
qc.cnot(0, 1)
qc.draw("mpl")
```




    
![png](output_17_0.png)
    



As you can see, answer B creates a $CNOT$ gate.