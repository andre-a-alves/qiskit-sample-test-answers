---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-02
  - explanation
permalink: "questions/question-02/{{ page.fileSlug }}.html"

---


This code snippet applies an $R_{Y}$ gate with a $\theta$ of $\frac{3\pi}{4}$ to a $|0\rangle$ qubit.
This is a rotation along the y axis which brings the Bloch vector to the lower half of the Bloch sphere.


```python
from qiskit.visualization import plot_bloch_vector
from math import pi

bloch_vector = [1, 3 * pi / 4, 0]
plot_bloch_vector(bloch_vector, title="Result of Code Fragment", coord_type="spherical")
```




    
![png](output_4_0.png)
    


