---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-05
  - answer_options
permalink: "questions/question-05/{{ page.fileSlug }}.html"

---


**A.**
```python
bell = QuantumCircuit(2)  
bell.h(0)  
bell.x(1)  
bell.cx(0, 1)
```
**B.**  
```python
bell = QuantumCircuit(2)  
bell.cx(0, 1)  
bell.h(0)  
bell.x(1)
```
**C.**  
```python
bell = QuantumCircuit (2)  
bell.h(0)  
bell.x(1)  
bell.cz(0, 1)  
```
**D.**  
```python
bell = QuantumCircuit(2)  
bell.h(0)  
bell.h(0)
```
