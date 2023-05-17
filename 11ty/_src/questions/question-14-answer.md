---
title: Correct Answer
layout: layouts/simple.njk
tags:
  - question-14
  - correct_answer
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


**A.**
```python
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)
```
