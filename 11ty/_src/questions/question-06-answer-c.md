---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-06
  - breakdown
  - answer-c
permalink: "questions/question-06/{{ page.fileSlug }}.html"

---


`qc.ry(math.pi / 2, 0)`

From $|0\rangle$, an $R_{Y}\left(\frac{\pi}{2}\right)$ gate is equivalent to an $H$ gate and rotates the Bloch vector halfway from $|0\rangle$ to $|1\rangle$ around the y axis.

#### Let's take a closer look:


```python
qc = QuantumCircuit(1, 1)

# Answer's code fragment
qc.ry(math.pi / 2, 0)

simulator = Aer.get_backend("statevector_simulator")
job = execute(qc, simulator)
result = job.result()
outputstate = result.get_statevector(qc)
plot_bloch_multivector(outputstate)
```




    
![png](output_21_0.png)
    



As you can see, answer C outputs in the correct Bloch sphere.