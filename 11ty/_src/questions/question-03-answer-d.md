---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-d
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg[0])  
    qc.h(inp_reg[1])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first `inp_reg` qubit, then an $H$ gate to the second `inp_reg` qubit, and finally an $X$ gate to the first `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0])
qc.h(inp_reg[1])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_26_0.png)
    



As you can see, answer D results in the correct circuit illustration.