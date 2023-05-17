---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-11
  - breakdown
  - answer-c
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


`qc.barrier()` 

Calling the `barrier()` method on a `QuantumCircuit` object without passing any parameters will place a barrier after all qubits.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)

# Insert code fragment from answer
qc.barrier()

qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, answer C places a barrier across all the qubits.