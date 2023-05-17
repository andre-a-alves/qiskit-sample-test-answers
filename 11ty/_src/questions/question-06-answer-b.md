---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-06
  - breakdown
  - answer-b
permalink: "questions/question-06/{{ page.fileSlug }}.html"

---


`qc.rx(math.pi / 2, 0)`

This code fragment rotates the Bloch vector around the X axis instead of the Y axis.

#### Let's take a closer look:


```python
qc = QuantumCircuit(1, 1)

# Answer's code fragment
qc.rx(math.pi / 2, 0)

simulator = Aer.get_backend("statevector_simulator")
job = execute(qc, simulator)
result = job.result()
outputstate = result.get_statevector(qc)
plot_bloch_multivector(outputstate)
```




    
![png](output_17_0.png)
    



As you can see, answer B rotates the Bloch vector around the wrong axis.