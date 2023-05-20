---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-01
  - breakdown
  - answer-c
permalink: "questions/question-01/{{ page.fileSlug }}.html"

---


```python
QuantumCircuit(QuantumRegister(4, ‘qro’), QuantumRegister(4, ‘cr1’))
```

This is a valid constructor for a `QuantumCircuit` because it passes a list of registers.
But in this case, the resulting circuit has eight qubits and no classical bits.

Let's take a closer look:


```python
qc = QuantumCircuit(QuantumRegister(4, "qro"), QuantumRegister(4, "cr1"))
qc.draw("mpl")
```




    
![png](output_23_0.png)
    



As you can see, the resulting circuit has eight qubits and no classical bits.