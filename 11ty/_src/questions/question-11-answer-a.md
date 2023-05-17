---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-11
  - breakdown
  - answer-a
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


`qc.barrier(qc)`  

A `QuantumCircuit` is not a valid parameter to pass to the `barrier()` method, so nothing will happen.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)

# Insert code fragment from answer
qc.barrier(qc)

qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, there is no barrier.