---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-02
  - breakdown
  - answer-a
permalink: "questions/question-02/{{ page.fileSlug }}.html"

---


* 0.8536  

This probability puts the Bloch vector in the top half of the Bloch sphere.
It would require $\theta$ to be less than $\frac{\pi}{2}$.
Specifically, this is the probability when $\theta$ is $\frac{\pi}{4}$.

#### Let's take a closer look:


```python
# This is the same angle used in the question
theta = math.pi / 4

qc = QuantumCircuit(1)
qc.ry(theta, 0)

plot_histogram(Aer.get_backend("statevector_simulator").run(qc).result().get_counts(qc))
```




    
![png](output_14_0.png)
    



As you can see, for answer A to be correct, $\theta$ would need to be $\frac{\pi}{4}$.