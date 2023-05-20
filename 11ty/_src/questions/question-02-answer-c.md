---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-02
  - breakdown
  - answer-c
permalink: "questions/question-02/{{ page.fileSlug }}.html"

---


* 0.1464

This probability puts the Bloch vector in the bottom half of the Bloch sphere.
By process of elimination alone, this is the correct answer.

#### Let's take a closer look:


```python
# This is the same angle used in the question
theta = 3 * math.pi / 4

qc = QuantumCircuit(1)
qc.ry(theta, 0)

plot_histogram(Aer.get_backend("statevector_simulator").run(qc).result().get_counts(qc))
```




    
![png](output_24_0.png)
    



As you can see, when $\theta = \frac{3\pi}{4}$, the probability of measuring $|0\rangle$ is 0.146.