---
title: Question 13
layout: layouts/question.njk
tags:
  - question-13
  - question
permalink: "questions/question-13/{{ page.fileSlug }}.html"

---
# Question 13

#### Given the following code, what is the depth of the circuit?
```python
qc = QuantumCircuit(2, 2)

qc.h(0)
qc.barrier(0)
qc.cx(0,1)
qc.barrier([0,1])
```
