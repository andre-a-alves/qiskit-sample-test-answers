---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-15
  - breakdown
  - answer-b
permalink: "questions/question-15/{{ page.fileSlug }}.html"

---


`execute(qc, backend, shots=1024, custom_topology=[[0,1],[2,3]])`

This code fragment properly passes positional parameter before keyword arguments, but it passes a custom coupling map by using a `custom_topology=` keyword.
This should be `coupling_map=`.

#### Let's take a closer look:


```python
backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

try:
    with warnings.catch_warnings(record=False):
        # Insert answer's code fragment and assign to variable job
        job = execute(qc, backend, shots=1024, custom_topology=[[0, 1], [2, 3]])
except Exception as e:
    print(f"The following warning was raised: {e}")
```

**Output**:
```bash
The following warning was raised: Option custom_topology is not used by this backend

```

As you can see, answer B raises a warning about the incorrect keyword argument `custom_topology`.