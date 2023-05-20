---
title: average gate fidelity
layout: layouts/simple.njk
tags:
  - question-19
  - breakdown
  - average-gate-fidelity
permalink: "questions/question-19/{{ page.fileSlug }}.html"

---


To obtain the average gate fidelity between the two operators, we can just pass the two operators as parameters to the `average_gate_fidelity` function.


```python
average_gate_fidelity(op_a, target=op_b)
```




    1.0



As you can see above, the `average_gate_fidelity` is 1.