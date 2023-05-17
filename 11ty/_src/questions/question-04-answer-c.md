---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-04
  - breakdown
  - answer-c
permalink: "questions/question-04/{{ page.fileSlug }}.html"

---


`qc.measure_all()`

This will add new classical bits to store the measurements.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)
qc.measure_all()
qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, answer C generates new classical bits, causing the circuit to be different from the circuit shown in the question.