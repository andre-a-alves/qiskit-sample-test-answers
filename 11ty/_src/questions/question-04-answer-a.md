---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-04
  - breakdown
  - answer-a
permalink: "questions/question-04/{{ page.fileSlug }}.html"

---


`qc.measure([0,1,2], [0,1,2])`

This will measure qubit 0 on classical bit 0, qubit 1 on classical bit 1, and qubit 2 on classical bit 2.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)
qc.measure([0, 1, 2], [0, 1, 2])
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, answer A creates the correct circuit.