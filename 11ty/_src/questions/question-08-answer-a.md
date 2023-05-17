---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-08
  - breakdown
  - answer-a
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


```python
v = [1/sqrt(2), 0, 0, 1/sqrt(2)]  
qc.initialize(v, [0,1]) 
```

This code fragment will initialize the two qubits in the QuantumCircuit directly into the desired statevector. 

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)

# Answer Fragment
v = [1 / sqrt(2), 0, 0, 1 / sqrt(2)]
qc.initialize(v, [0, 1])

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

**Output**:
```bash
Statevector([0.70710678+0.j, 0.        +0.j, 0.        +0.j,
             0.70710678+0.j],
            dims=(2, 2))

```

As you can see, answer A produces the desired statevector.