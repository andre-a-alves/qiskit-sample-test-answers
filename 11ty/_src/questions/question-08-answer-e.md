---
title: Answer E
layout: layouts/simple.njk
tags:
  - question-08
  - breakdown
  - answer-e
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


```python
qc.h(0)  
qc.h(1)  
qc.measure_all() 
```

This circuit is initially put into a state where every possibility is equally probably, or $\frac{1}{2} \left(|00\rangle + |01\rangle + |10\rangle + |11\rangle \right)$ which has a statevector of $\left[ \frac{1}{2} \quad \frac{1}{2} \quad \frac{1}{2} \quad \frac{1}{2} \right]$.
However, measuring the qubits collapses the state, so the statevector would always be `1.+0.j` for one possible and `0.+0.j` for all the others.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)

# Answer Fragment
qc.h(0)
qc.h(1)
qc.measure_all()

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

**Output**:
```bash
Statevector([0.+0.j, 1.+0.j, 0.+0.j, 0.+0.j],
            dims=(2, 2))

```

As you can see, answer E results in a collapsed state where the statevector is 1 for one value and 0 for all others.
