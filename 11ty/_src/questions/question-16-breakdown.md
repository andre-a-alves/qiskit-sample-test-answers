---
title: Answers Breakdown
layout: layouts/breakdown.njk
tags:
  - question-16
  - breakdown_base
permalink: "questions/question-16/{{ page.fileSlug }}.html"

---


To verify the answer to this question, we can just print out a list of the backends contained in BasicAer.


```python
for backend in BasicAer.backends():
    print(backend)
```

**Output**:
```bash
qasm_simulator
statevector_simulator
unitary_simulator

```

As you can see, these are the available backends for `BasicAer`.
