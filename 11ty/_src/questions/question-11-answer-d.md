---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-11
  - breakdown
  - answer-d
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


`qc.barrier(3)`

This code fragment passes the index of a nonexistant qubit as a parameter to the  `barrier()` method.
Since there is no fourth qubit, index 3 is out-of-bounds and will raise an error.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)

try:
    # Insert code fragment from answer
    qc.barrier(3)

    qc.draw("mpl")
except Exception as e:
    print(f"This solution raised the following error: {e}")
```

**Output**:
```bash
This solution raised the following error: 'Index 3 out of range for size 3.'

```

As you can see, this code fragment riases an error.