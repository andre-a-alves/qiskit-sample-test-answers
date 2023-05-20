---
title: Correct Answer
layout: layouts/simple.njk
tags:
  - question-12
  - correct_answer
permalink: "questions/question-12/{{ page.fileSlug }}.html"

---


**A.**
```python
qc = QuantumCircuit(1,1)
qc.h(0)
qc.s(0)
qc.h(0)
qc.measure(0,0)
```
