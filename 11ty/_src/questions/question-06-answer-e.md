---
title: Answer E
layout: layouts/simple.njk
tags:
  - question-06
  - breakdown
  - answer-e
permalink: "questions/question-06/{{ page.fileSlug }}.html"

---


`qc.ry(math.pi, 0)`

This would rotate the Bloch vector all the way to $|1\rangle$.

#### Let's take a closer look:


```python
qc = QuantumCircuit(1, 1)

# Answer's code fragment
qc.ry(math.pi, 0)

simulator = Aer.get_backend("statevector_simulator")
job = execute(qc, simulator)
result = job.result()
outputstate = result.get_statevector(qc)
plot_bloch_multivector(outputstate)
```




    
![png](output_29_0.png)
    



As you can see, answer E rotates the Bloch vector too far.
