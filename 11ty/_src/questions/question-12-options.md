---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-12
  - answer_options
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
**B.**
```python
qc = QuantumCircuit(1,1)
qc.measure(0,0)
```
**C.**
```python
qc = QuantumCircuit(1,1)
qc.h(0)
qc.t(0)
qc.tdg(0)
qc.h(0)
qc.measure(0,0)
```
**D.** 
```python
qc = QuantumCircuit(1,1)
qc.h(0)
qc.z(0)
qc.h(0)
qc.measure(0,0)
```
