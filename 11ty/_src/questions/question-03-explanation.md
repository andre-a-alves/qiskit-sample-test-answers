---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-03
  - explanation
permalink: "questions/question-03/{{ page.fileSlug }}.html"

---


This important piece to understand from this question is that in Python, the first element of a list has an index of 0.
One must also understand that the notation __[ x : y ]__ mean the numbers will begin at x, and y will be the first index not included in the list.
So [0:3] will be [0, 1, 2] and [4:5] will be [4].


```python
sample = [i for i in range(5)]
print(sample)
print(sample[0:3])
print(sample[4:5])
```

**Output**:
```bash
[0, 1, 2, 3, 4]
[0, 1, 2]
[4]

```
