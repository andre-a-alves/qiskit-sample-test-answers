---
title: Question 20
layout: layouts/question.njk
tags:
  - question-20
  - question
permalink: "questions/question-20/{{ page.fileSlug }}.html"

---
# Question 20

#### Given this code fragment, which output fits most closely with the measurement probability distribution?
```python
    qc = QuantumCircuit(2, 2)
    qc.x(0)
    qc.measure([0,1], [0,1])
    simulator = Aer.get_backend('qasm_simulator')
    result = execute(qc, simulator, shots=1000).result()
    counts = result.get_counts(qc)
    print(counts)
```
