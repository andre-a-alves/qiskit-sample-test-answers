---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-08
  - breakdown
  - answer-c
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


```python
v1, v2 = [1,0], [0,1]  
qc.initialize(v1,0)  
qc.initialize(v2,1)
```

This code fragment places the circuit into the constant state of $|10\rangle$ by initiailizeing the first qubit as 0 and the second qubit as 1.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)

# Answer Fragment
v1, v2 = [1, 0], [0, 1]
qc.initialize(v1, 0)
qc.initialize(v2, 1)

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

**Output**:
```bash
Statevector([0.+0.j, 0.+0.j, 1.+0.j, 0.+0.j],
            dims=(2, 2))

```

As you can see, the output statevector is $\left[ 0 \quad 0 \quad 1 \quad 0 \right]$.