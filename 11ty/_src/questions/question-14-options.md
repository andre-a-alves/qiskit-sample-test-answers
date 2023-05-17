---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-14
  - answer_options
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


**A.**
```python
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)
```
**B.**
```python
qasm_sim = Aer.getBackend('ibmq_simulator')
couple_map = [[0, 1], [0, 2]]
job = execute(qc, loop=1024, coupling_map=couple_map)
```
**C.**
```python 
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, repeat=1024, coupling_map=couple_map)
```
**D.**
```python
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)
```
