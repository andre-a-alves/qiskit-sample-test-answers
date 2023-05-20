---
title: Correct Answer
layout: layouts/simple.njk
tags:
  - question-08
  - correct_answer
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
