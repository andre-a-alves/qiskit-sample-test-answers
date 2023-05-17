---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-02
  - breakdown
  - answer-d
permalink: "questions/question-02/{{ page.fileSlug }}.html"

---


* 1

This probability has the Bloch vector is at the very top of the Bloch sphere and equals $|0\rangle$.
This was the case before we applied an $R_{Y}$ gate. 

#### Let's take a closer look:


```python
# We omit theta altogether

qc = QuantumCircuit(1)
# we do not include any gates

plot_histogram(Aer.get_backend("statevector_simulator").run(qc).result().get_counts(qc))
```




    
![png](output_26_0.png)
    



Now we can add an $R_{Y}$ gate with a $\theta$ of zero, and we will get the same result


```python
theta = 0

qc.ry(theta, 0)

plot_histogram(Aer.get_backend("statevector_simulator").run(qc).result().get_counts(qc))
```




    
![png](output_28_0.png)
    



As you can see, no $R_{Y}$ is necessary to have a probability of 1 that the measurement will result in $|0\rangle$.
$\theta = 0$ will also return the same result.
