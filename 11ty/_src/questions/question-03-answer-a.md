---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-a
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg)  
    qc.x(ancilla)  
    qc.draw() 

This would apply an $H$ gate to both `inp_reg` qubits and an $X$ gate to the `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg)
qc.x(ancilla)
qc.draw("mpl")
```




    
![png](output_16_0.png)
    



As you can see, answer A results in the correct circuit illustration.