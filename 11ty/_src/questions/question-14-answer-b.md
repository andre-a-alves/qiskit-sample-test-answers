---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-14
  - breakdown
  - answer-b
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


```python
qasm_sim = Aer.getBackend('ibmq_simulator')
couple_map = [[0, 1], [0, 2]]
job = execute(qc, loop=1024, coupling_map=couple_map)
```
This code fragment uses the wrong backend; it uses the IBMQ simulator, which is not an actual backend within Aer.
This fragment will also throw an error, because it uses the `getBackend()` method, which does not exist.
Finally, `loop=` is not the correct parameter to pass as for the number of shots to execute.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

try:
    # Insert Answer's code snippet
    qasm_sim = Aer.getBackend("ibmq_simulator")
    couple_map = [[0, 1], [0, 2]]
    job = execute(qc, loop=1024, coupling_map=couple_map)

    result = job.result()

    # Confirm our results met the criteria
    print(f"Backend: {result.backend_name}")
    print(f"Shots: {result.results[0].shots}")
except Exception as e:
    print(f"This code raised the following exception: {e}")
```

**Output**:
```bash
This code raised the following exception: 'AerProvider' object has no attribute 'getBackend'

```

As you can see, answer B throws an error.


```python
for backend in Aer.backends():
    print(backend)
```

**Output**:
```bash
aer_simulator
aer_simulator_statevector
aer_simulator_density_matrix
aer_simulator_stabilizer
aer_simulator_matrix_product_state
aer_simulator_extended_stabilizer
aer_simulator_unitary
aer_simulator_superop
qasm_simulator
statevector_simulator
unitary_simulator
pulse_simulator

```

Furthermore, you can see there is no IBMQ backend contained within Aer.