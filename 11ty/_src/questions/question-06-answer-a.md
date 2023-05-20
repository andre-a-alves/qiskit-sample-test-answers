---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-06
  - breakdown
  - answer-a
permalink: "questions/question-06/{{ page.fileSlug }}.html"

---


`qc.h(0)`

The $H$ gate rotates the Bloch vector halfway from $|0\rangle$ to $|1\rangle$ around the y axis.

#### Let's take a closer look:


```python
qc = QuantumCircuit(1, 1)

# Answer's code fragment
qc.h(0)

simulator = Aer.get_backend("statevector_simulator")
job = execute(qc, simulator)
result = job.result()
outputstate = result.get_statevector(qc)
plot_bloch_multivector(outputstate)
```




    
![png](output_15_0.png)
    



As you can see, answer A outputs in the correct Bloch sphere.