---
title: Answer E
layout: layouts/simple.njk
tags:
  - question-11
  - breakdown
  - answer-e
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


`qc.barrier_all()`

There is no `barrier_all()` method, so this method call will throw an error.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)

try:
    # Insert code fragment from answer
    qc.barrier_all()

    qc.draw("mpl")
except Exception as e:
    print(f"This solution raised the following error: {e}")
```

**Output**:
```bash
This solution raised the following error: 'QuantumCircuit' object has no attribute 'barrier_all'

```

As you can see, this code fragment riases an error.
