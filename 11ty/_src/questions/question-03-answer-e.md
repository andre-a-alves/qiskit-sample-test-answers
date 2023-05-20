---
title: Answer E
layout: layouts/simple.njk
tags:
  - question-03
  - breakdown
  - answer-e
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


    qc.h(inp_reg[1])  
    qc.h(inp_reg[2])  
    qc.x(ancilla[1])  
    qc.draw()  

This would apply an $H$ gate to the second `inp_reg` qubit, an $H$ gate to a nonexistant third `inp_reg` qubit resulting in an error, and an $X$ gate to the nonexistant second `ancilla` qubit.
This code will result in an error

#### Let's take a closer look:


```python
try:
    inp_reg = QuantumRegister(2, name="inp")
    ancilla = QuantumRegister(1, name="anc")
    qc = QuantumCircuit(inp_reg, ancilla)
    qc.h(inp_reg[1])
    qc.h(inp_reg[2])
    qc.x(ancilla[1])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

**Output**:
```bash
Error: list index out of range

```

As you can see, answer E results in an error and cannot be run.