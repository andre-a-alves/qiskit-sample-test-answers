---
title: Answers Breakdown
layout: layouts/breakdown.njk
tags:
  - question-20
  - breakdown_base
permalink: "questions/question-20/{{ page.fileSlug }}.html"

---


We begin by looking at the circuit itself, which has an $X$ gate operating on the first qubit, and measurements from the first qubit to the first classical bit and the second qubit to the second classical bit.


```python
qc = QuantumCircuit(2, 2)
qc.x(0)
qc.measure([0, 1], [0, 1])

qc.draw("mpl")
```




    
![png](output_13_0.png)
    



Understanding the the circuit began in the $|00\rangle$ state and the $X$ gate flipped the first qubit to 1, we know the result should be $|01\rangle$.


```python
simulator = Aer.get_backend("qasm_simulator")
result = execute(qc, simulator, shots=1000).result()
counts = result.get_counts(qc)
print(counts)
```

**Output**:
```bash
{'01': 1000}

```

As you can see above, our analysis was sound, and the output is answer B.
