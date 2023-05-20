---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-08
  - answer_options
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


**A.**  
```python
v = [1/sqrt(2), 0, 0, 1/sqrt(2)]
qc.initialize(v, [0,1])
```
**B.**  
```python
qc.h(0)  
qc.cx(0,1)  
```
**C.**  
```python
v1, v2 = [1,0], [0,1]  
qc.initialize(v1,0)  
qc.initialize(v2,1)  
```
**D.**  
```python
qc.cx(0,1)  
qc.measure_all()
```
**E.**  
```python
qc.h(0)  
qc.h(1)  
qc.measure_all() 
```
