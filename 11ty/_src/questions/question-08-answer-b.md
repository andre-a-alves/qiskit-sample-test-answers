---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-08
  - breakdown
  - answer-b
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


```python
qc.h(0)  
qc.cx(0,1)  
```

This well-known circuit pattern creates the Bell state of $\frac{1}{\sqrt{2}}\left(|00\rangle+|11\rangle\right)$.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)

# Answer Fragment
qc.h(0)
qc.cx(0, 1)

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

As you can see, answer B produces the desired statevector.