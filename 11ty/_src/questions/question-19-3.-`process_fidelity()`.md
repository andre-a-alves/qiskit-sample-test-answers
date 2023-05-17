---
title: 3. `process_fidelity()`
layout: layouts/simple.njk
tags:
  - question-19
  - breakdown
  - 3.-`process_fidelity()`
permalink: "questions/question-19/{{ page.fileSlug }}.html"

---


To obtain the process fidelity between the two operators, we can just pass the two operators as parameters to the `process_fidelity` function.


```python
process_fidelity(op_a, target=op_b)
```




    1.0



As you can see above, the `process_fidelity` is 1.
