---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-01
  - breakdown
  - answer-b
permalink: "questions/question-01/{{ page.fileSlug }}.html"

---


```python
QuantumCircuit(4)
```

This is a valid constructor for a `QuantumCircuit`, because it passes an integer number representing the number of qubits.
But by only creating a circuit with four qubits, there are no classical bits.

Let's take a closer look:


```python
qc = QuantumCircuit(4)
qc.draw("mpl")
```




    
![png](output_17_0.png)
    



As you can see, the resulting circuit has four qubits but no classical bits.