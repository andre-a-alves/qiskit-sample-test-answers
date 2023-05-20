---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-10
  - answer_options
permalink: "questions/question-10/{{ page.fileSlug }}.html"

---


**A.**
```python
qc.ccx(0,1,2)
```
**B.**
```python
qc.mct([0,1], 2)
```
**C.**
```python 
from qiskit.circuit.library import CXGate
ccx = CXGate().control()
qc.append(ccx, [0,1,2])
```
**D.**
```python
qc.cry(0,1,2)
```
