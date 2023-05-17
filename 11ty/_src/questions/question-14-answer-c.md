---
title: Answer C
layout: layouts/simple.njk
tags:
  - question-14
  - breakdown
  - answer-c
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


```python
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, repeat=1024, coupling_map=couple_map)
```
This code fragment uses the QASM simulator.
However, there is no `repeat=` parameter for the `execute()` function.

Technically, this fragment will actually satisfy the criteria named in the question, but it is not the best answer.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

# Insert Answer's code snippet
qasm_sim = Aer.get_backend("qasm_simulator")
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, repeat=1024, coupling_map=couple_map)

result = job.result()

# Confirm our results met the criteria
print(f"Backend: {result.backend_name}")
print(f"Shots: {result.results[0].shots}")
```

**Output**:
```bash
Backend: qasm_simulator
Shots: 1024

```

As you can see, answer C _does_ meet the given criteria.
However, since it does so __by accident__ (because `repeat=` should be `shots=`), it is __wrong__.