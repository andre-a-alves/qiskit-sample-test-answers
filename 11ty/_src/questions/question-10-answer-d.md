---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-10
  - breakdown
  - answer-d
permalink: "questions/question-10/{{ page.fileSlug }}.html"

---


`qc.cry(0,1,2)`

This code fragment applies a $CR_{Y}(0)$ gate, which is not a Toffoli.
A $CR_{Y}$ is a controlled $R_{Y}$ gate with a $\theta$ of zero.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

# Insert code fragment from answer
qc.cry(0, 1, 2)

qc.draw("mpl")
```




    
![png](output_25_0.png)
    



As you can see, this two-qubit gate is not a Troffoli.
