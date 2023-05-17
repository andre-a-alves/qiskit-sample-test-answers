---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-17
  - breakdown
  - answer-d
permalink: "questions/question-17/{{ page.fileSlug }}.html"

---


`backend = BasicAer.get_back('statevector_simulator')`  

`BasicAer` has no method `get_back()`.
The correct method is `get_backend()`.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.get_back("statevector_simulator")
except Exception as e:
    print(f"Exception thrown: {e}")
```

**Output**:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'get_back'

```

As you can see, answer D throws an error.
