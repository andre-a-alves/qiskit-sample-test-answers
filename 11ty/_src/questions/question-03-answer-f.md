---
title: Answer F
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-f
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg)  
    qc.h(inp_reg)  
    qc.x(ancilla)  
    qc.draw()  

This would apply two $H$ gates to all of the `inp_reg` qubits, and an $X$ gate to the `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg)
qc.h(inp_reg)
qc.x(ancilla)
qc.draw("mpl")
```




    
![png](output_34_0.png)
    



As you can see, answer F results in a circuit with too many $H$ gates.
