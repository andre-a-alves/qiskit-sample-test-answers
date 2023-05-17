---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-17
  - breakdown
  - answer-a
permalink: "questions/question-17/{{ page.fileSlug }}.html"

---


`backend = BasicAer.StatevectorSimulatorPy()`

While there is a Class `StateVectorSimulatorPy()`, and the statevector simulator object that will ultimately be assigned to `backend` is an object of this Class, it is not an attribute of `BasicAer`.
In other words, this is not how you would obtain an instance of that class.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.StatevectorSimulatorPy()
except Exception as e:
    print(f"Exception thrown: {e}")
```

**Output**:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'StatevectorSimulatorPy'

```

As you can see, answer A throws an error.