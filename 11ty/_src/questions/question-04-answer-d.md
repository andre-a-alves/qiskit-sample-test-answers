---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-04
  - breakdown
  - answer-d
permalink: "questions/question-04/{{ page.fileSlug }}.html"

---


`qc.measure(0,1,2)`

This is improper syntax; `measure()` cannot receive three parameters.
This code fragment will result in an error.

#### Let's take a closer look:


```python
try:
    qc = QuantumCircuit(3, 3)
    qc.measure(0, 1, 2)
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

**Output**:
```bash
Error: QuantumCircuit.measure() takes 3 positional arguments but 4 were given

```

As you can see, answer D raises and error and cannot be run.
