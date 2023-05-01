---
title: Question 14
layout: layouts/base.njk
tags: [question]
---
# Question 14

#### Which code snippet would execute a circuit given these parameters?

1. Measure the circuit 1024 times
2. Use the QASM simulator
3. Use a coupling map that connects three qubits linearly

```python
    qc = QuantumCircuit(3)
    # Insert code fragment here
    result = job.result()
```

## Answer Options

**A.**

    qasm_sim = Aer.get_backend('qasm_simulator')
    couple_map = [[0, 1], [1, 2]]
    job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)
**B.**

    qasm_sim = Aer.getBackend('ibmq_simulator')
    couple_map = [[0, 1], [0, 2]]
    job = execute(qc, loop=1024, coupling_map=couple_map)
**C.**
    
    qasm_sim = Aer.get_backend('qasm_simulator')
    couple_map = [[0, 1], [1, 2]]
    job = execute(qc, backend=qasm_sim, repeat=1024, coupling_map=couple_map)
**D.**

    qasm_sim = Aer.get_backend('qasm_simulator')
    couple_map = [[0, 1], [1, 2]]
    job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)

## Question Explanation

There are a number of different backends on which we may execute our circuits.
We get those backends from the `Aer.get_backend()` method, to which we pass the desired backend.
In this case, we want a QASM simulator, which is passed as `'qasm_simulator'`.

The circuit should also be measured 1024 times.
Each time a circuit is run is called a *shot*, therefore, we want an execution that includes 1024 shots.

While all four answers have the same coupling map, it is worth mentioning that coupling map gives the connectivity constraint of a backend for Qiskit's compiler.

## References

* [Qiskit execute() Function API](https://qiskit.org/documentation/apidoc/execute.html?highlight=execute#qiskit.execute_function.execute)

## Correct Answer

**A.**

    qasm_sim = Aer.get_backend('qasm_simulator')
    couple_map = [[0, 1], [1, 2]]
    job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)

## Answer Explanations

### Answer A

`qasm_sim = Aer.get_backend('qasm_simulator')`  
`couple_map = [[0, 1], [1, 2]]`  
`job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)`  

This code fragment uses the QASM simulator, applies 1024 shots, and has a linear coupling map.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(3)

# Insert Answer's code snippet
qasm_sim = Aer.get_backend("qasm_simulator")
couple_map = [[0, 1], [1, 2]]
job = execute(qc, backend=qasm_sim, shots=1024, coupling_map=couple_map)

result = job.result()

# Confirm our results met the criteria
print(f"Backend: {result.backend_name}")
print(f"Shots: {result.results[0].shots}")
```

    Backend: qasm_simulator
    Shots: 1024


As you can see, answer A matches the criteria given in the question.

### Answer B

`qasm_sim = Aer.getBackend('ibmq_simulator')`  
`couple_map = [[0, 1], [0, 2]]`  
`job = execute(qc, loop=1024, coupling_map=couple_map)`

This code fragment uses the wrong backend; it uses the IBMQ simulator, which is not an actual backend within Aer.
This fragment will also throw an error, because it uses the `getBackend()` method, which does not exist.
Finally, `loop=` is not the correct parameter to pass as for the number of shots to execute.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute

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

    This code raised the following exception: 'AerProvider' object has no attribute 'getBackend'


As you can see, answer B throws an error.


```python
for backend in Aer.backends():
    print(backend)
```

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


Furthermore, you can see there is no IBMQ backend contained within Aer.

### Answer C

`qasm_sim = Aer.get_backend('qasm_simulator')`  
`couple_map = [[0, 1], [1, 2]]`  
`job = execute(qc, backend=qasm_sim, repeat=1024, coupling_map=couple_map)`  

This code fragment uses the QASM simulator.
However, there is no `repeat=` parameter for the `execute()` function.

Technically, this fragment will actually satisfy the criteria named in the question, but it is not the best answer.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute

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

    Backend: qasm_simulator
    Shots: 1024


As you can see, answer C _does_ meet the given criteria.
However, since it does so __by accident__ (because `repeat=` should be `shots=`), it is __wrong__.

### Answer D

`qasm_sim = Aer.get_backend('qasm_simulator')`  
`couple_map = [[0, 1], [1, 2]]`  
`job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)`  

This code fragment uses the QASM simulator.
However, there is no `shot=` parameter for the `execute()` function; the parameter should be called `shots=`.
Also, this will throw an error, because the *positional* argument `qc`, which represents the circuit to be executed, should be the first parameter passed to the `execute` function before any `keyword` arguments are passed.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(3)

# Insert Answer's code snippet
qasm_sim = Aer.get_backend('qasm_simulator')
couple_map = [[0, 1], [1, 2]]
job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)

result = job.result()

# Confirm our results met the criteria
print(f"Backend: {result.backend_name}")
print(f"Shots: {result.results[0].shots}")
```


      Cell In [5], line 8
        job = execute(backend=qasm_sim, qc, shot=1024, coupling_map=couple_map)
                                                                              ^
    SyntaxError: positional argument follows keyword argument



As you can see, this code fragment throws and error.
