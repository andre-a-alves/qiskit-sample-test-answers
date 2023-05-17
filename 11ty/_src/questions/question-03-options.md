---
title: Answer Options
layout: layouts/simple.njk
tags:
  - question-03
  - answer_options
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


**A.**
```python
qc.h(inp_reg)  
qc.x(ancilla)  
qc.draw()
```
**B.**
```python
qc.h(inp_reg[0:2])  
qc.x(ancilla[0])  
qc.draw()
```
**C.**  
```python
qc.h(inp_reg[0:1])  
qc.x(ancilla[0])  
qc.draw()
```
**D.**
```python
qc.h(inp_reg[0])
qc.h(inp_reg[1])
qc.x(ancilla[0])
qc.draw()
```
**E.**
```python
qc.h(inp_reg[1])  
qc.h(inp_reg[2])  
qc.x(ancilla[1])  
qc.draw()
```
**F.**  
```python
qc.h(inp_reg)  
qc.h(inp_reg)  
qc.x(ancilla)  
qc.draw()
```
