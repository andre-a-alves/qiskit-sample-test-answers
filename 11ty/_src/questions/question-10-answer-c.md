---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-10
  - breakdown
  - answer-c
permalink: "questions/question-10/{{ page.fileSlug }}.html"

---


```python
from qiskit.circuit.library import CXGate
ccx = CXGate().control()  
qc.append(ccx, [0,1,2]) 
```

This code fragment adds a $CCX$ gate by importing the Class from the circuit library itself.
By definition, this is a Toffoli.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

# Insert code fragment from answer
from qiskit.circuit.library import CXGate

ccx = CXGate().control()
qc.append(ccx, [0, 1, 2])

qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, answer C creates a Toffoli gate.