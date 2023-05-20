---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-17
  - breakdown
  - answer-c
permalink: "questions/question-17/{{ page.fileSlug }}.html"

---


`backend = BasicAer.StatevectorSimulatorPy().name()`  

While there is a Class `StateVectorSimulatorPy()`, and the statevector simulator object that will ultimately be assigned to `backend` is an object of this Class, it is not an attribute of `BasicAer`.
In other words, this is not how you would obtain an instance of that class.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.StatevectorSimulatorPy().name()
except Exception as e:
    print(f"Exception thrown: {e}")
```

**Output**:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'StatevectorSimulatorPy'

```

As you can see, answer C throws an error.