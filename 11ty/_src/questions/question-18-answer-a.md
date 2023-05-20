---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-18
  - breakdown
  - answer-a
permalink: "questions/question-18/{{ page.fileSlug }}.html"

---


`op = Operator.Xop(0)`

The `Operator` class does not have an `Xop()` method.
This code fragment will through an error.

#### Let's take a closer look:


```python
try:
    op = Operator.Xop(0)
except Exception as e:
    print(f"Exception thrown: {e}")
```

**Output**:
```bash
Exception thrown: type object 'Operator' has no attribute 'Xop'

```

As you can see, answer A throws an error.