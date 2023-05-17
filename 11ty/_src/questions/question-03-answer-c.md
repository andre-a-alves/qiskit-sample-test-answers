---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-c
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg[0:1])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first `inp_reg` qubit and an $X$ gate to the first `ancilla` qubit.
However, no gate would be applied to the second `inp_reg` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0:1])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_22_0.png)
    



As you can see, the second `inp_reg` qubit has no gate applied and does not match the circuit illustrated.