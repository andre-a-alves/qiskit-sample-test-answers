---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-01
  - breakdown
  - answer-a
permalink: "questions/question-01/{{ page.fileSlug }}.html"

---


```python
QuantumCircuit(4, 4)
```

This is a valid constructor for a QuantumCircuit, because it passes two integer numbers: one representing the number of qubits, and another for the number of classical bits.
With four qubits and four classical bits, this is the correct answer.

Let's take a closer look:


```python
qc = QuantumCircuit(4, 4)
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, the resulting circuit has four qubits and four classical bits.