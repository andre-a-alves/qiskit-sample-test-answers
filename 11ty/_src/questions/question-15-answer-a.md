---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-15
  - breakdown
  - answer-a
permalink: "questions/question-15/{{ page.fileSlug }}.html"

---


`execute(qc, backend, shots=1024, coupling_map=[[0,1], [1,2]])`

This code fragment properly passes positional parameter before keyword arguments, and it also passes a custom coupling map using the `coupling_map=` parameter.

#### Let's take a closer look:


```python
backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

# Insert answer's code fragment and assign to variable job
job = execute(qc, backend, shots=1024, coupling_map=[[0, 1], [1, 2]])
```

**Output**:
```bash
No classical registers in circuit "circuit-88", counts will be empty.

```

As you can see, although there is a warning that the output will not be readable, answer A runs flawlessly.