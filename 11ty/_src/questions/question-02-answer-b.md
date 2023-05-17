---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-02
  - breakdown
  - answer-b
permalink: "questions/question-02/{{ page.fileSlug }}.html"

---


* 0.5

This probability puts the Bloch vector halfway between $|0\rangle$ and $|1\rangle$.
It would require $\theta$ to be $\frac{\pi}{2}$.

#### Let's take a closer look:


```python
# This is the same angle used in the question
theta = math.pi / 2

qc = QuantumCircuit(1)
qc.ry(theta, 0)

plot_histogram(Aer.get_backend("statevector_simulator").run(qc).result().get_counts(qc))
```




    
![png](output_18_0.png)
    



As you can see, answer B would require $\theta$ to be $\frac{\pi}{2}$.