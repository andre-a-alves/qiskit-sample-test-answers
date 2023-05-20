---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-14
  - breakdown
  - answer-d
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


```python
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)
```

This code fragment uses the QASM simulator.
However, there is no `shot=` parameter for the `execute()` function; the parameter should be called `shots=`.
Also, this will throw an error, because the *positional* argument `qc`, which represents the circuit to be executed, should be the first parameter passed to the `execute` function before any `keyword` arguments are passed.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3)

try:
    # Insert Answer's code snippet
    qasm_sim = Aer.get_backend("qasm_simulator")
    couple_map = [[0, 1], [1, 2]]
    # SyntaxErrors cannot be caught if run without a surrounding function
    eval("job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)")

    result = job.result()

    # Confirm our results met the criteria
    print(f"Backend: {result.backend_name}")
    print(f"Shots: {result.results[0].shots}")
except SyntaxError as e:
    print(f"This raises a SyntaxError: {e}")
```

**Output**:
```bash
This raises a SyntaxError: invalid syntax (<string>, line 1)

```

As you can see, this code fragment throws and error.
