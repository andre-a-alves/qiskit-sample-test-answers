---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-06
  - breakdown
  - answer-d
permalink: "questions/question-06/{{ page.fileSlug }}.html"

---


`qc.rx(math.pi / 2, 0)`  
`qc.rz(-math.pi / 2, 0)`

This will first rotate the Bloch vector around the x axis so it lies along the y axis on the xy plane.
The next gate then rotates the vector around the z axis in the wrong direction.

#### Let's take a closer look:


```python
qc = QuantumCircuit(1, 1)

# Answer's code fragment
qc.rx(math.pi / 2, 0)
qc.rz(-math.pi / 2, 0)

simulator = Aer.get_backend("statevector_simulator")
job = execute(qc, simulator)
result = job.result()
outputstate = result.get_statevector(qc)
plot_bloch_multivector(outputstate)
```




    
![png](output_27_0.png)
    



As you can see, these two rotations move the Bloch vector in the opposite direction of the desired outcome.