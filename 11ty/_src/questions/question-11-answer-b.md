---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-11
  - breakdown
  - answer-b
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


`qc.barrier([0,1,2])`  

This code fragment passes a Python list for all the qubits contained in the `QuantumCircuit` qc.
Therefore, this will place a barrier across all qubits in the `QuantumCircuit`.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)

# Insert code fragment from answer
qc.barrier([0, 1, 2])

qc.draw("mpl")
```




    
![png](output_19_0.png)
    



As you can see, answer B places a barrier across all the qubits.