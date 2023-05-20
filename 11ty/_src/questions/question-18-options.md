---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-18
  - answer_options
permalink: "questions/question-18/{{ page.fileSlug }}.html"

---


**A.**
```python
    op = Operator.Xop(0)
```
**B.** 
```python
    op = Operator([[0,1]])
```
**C.** 
```python
    qc = QuantumCircuit(1)
    qc.x(0)
    op = Operator(qc)
```
**D.** 
```python
    op = Operator([[1,0,0,1]])
```
