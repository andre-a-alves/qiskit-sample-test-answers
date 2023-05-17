---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-01
  - breakdown
  - answer-d
permalink: "questions/question-01/{{ page.fileSlug }}.html"

---


```python
QuantumCircuit([4, 4])
```

This is not a valid constructor for a `QuantumCircuit`, because a Python list of integers is not a valid parameter.

Let's take a closer look:


```python
try:
    qc = QuantumCircuit([4, 4])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

**Output**:
```bash
Error: 'Expected an instance of Qubit, Clbit, or AncillaQubit, but was passed 4'

```

As you can see, this is not a valid constructor call.
