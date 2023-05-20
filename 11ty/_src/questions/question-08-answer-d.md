---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-08
  - breakdown
  - answer-d
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


```python
qc.cx(0,1)  
qc.measure_all()  
```

The initial $CX$ gate does not do anything, since the control bit remains in the 0 state.
Therefore, this code fragment remains in the $|00\rangle$ state.

Without considering the $CX$ gate, the `measure_all()` method collapses the statevector into a measured state with a probability of 1.
This does nothing to this specific circuit, because it already had a probability of 1.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2)

# Answer Fragment
qc.cx(0, 1)
qc.measure_all()

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

**Output**:
```bash
Statevector([1.+0.j, 0.+0.j, 0.+0.j, 0.+0.j],
            dims=(2, 2))

```

As you can see, the output statevector is $\left[ 1 \quad 0 \quad 0 \quad 0 \right]$.