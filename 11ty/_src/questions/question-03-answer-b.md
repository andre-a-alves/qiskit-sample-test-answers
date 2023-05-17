---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-b
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg[0:2])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first two `inp_reg` qubits, and an $X$ gate to the first `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0:2])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_18_0.png)
    



As you can see, answer B results in the correct circuit illustration.