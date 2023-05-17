---
title: Question 19
layout: layouts/question.njk
tags:
  - question-19
  - question
permalink: "questions/question-19/{{ page.fileSlug }}.html"

---
# Question 19

#### What would be the fidelity result(s) for these two operators, which differ only by global phase?
```python
    op_a = Operator(XGate())
    op_b = numpy.exp(1j * 0.5) * Operator(XGate())
```
