---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-15
  - breakdown
  - answer-c
permalink: "questions/question-15/{{ page.fileSlug }}.html"

---


`execute(qc, backend, shots=1024, device="qasm_simulator", mode="custom")`  

Neither the keyword arguments `device=` nor `mode=` are used or recognized.
In addition, no coupling map is passed as a parameter to `execute()`.

#### Let's take a closer look:


```python
backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

try:
    with warnings.catch_warnings(record=False):
        # Insert answer's code fragment and assign to variable job
        job = execute(qc, backend, shots=1024, device="qasm_simulator", mode="custom")
except Exception as e:
    print(f"The following warning was raised: {e}")
```

**Output**:
```bash
The following warning was raised: Option device is not used by this backend

```

As you can see, answer C raises a warning about the incorrect keyword argument `device`.