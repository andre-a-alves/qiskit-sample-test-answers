---
title: Question 8
layout: layouts/question.njk
tags:
  - question-08
  - question
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---
# Question 8

#### Which two code fragments, when inserted into the code below, will produce the statevector shown in the output?
```python
from math import sqrt
qc = QuantumCircuit(2)
# Insert fragment here
simulator = Aer.get_backend('statevector_simulator')
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

**Output:**
```bash
[0.707+0.j 0.+0.j 0.+0.j 0.707+0.j]
```
