---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-10
  - breakdown
  - answer-b
permalink: "questions/question-10/{{ page.fileSlug }}.html"

---


`qc.mct([0,1], 2)`

This adds a multi-bit controlled $X$ gate with two control qubits.
That is identical to a $CCX$ gate, which is a Troffoli.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

# Insert code fragment from answer
qc.mct([0, 1], 2)

qc.draw("mpl")
```




    
![png](output_19_0.png)
    



As you can see, answer B creates a Toffoli gate.