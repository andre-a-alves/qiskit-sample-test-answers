---
title: Question 15
layout: layouts/base.njk
---
# Question 15

#### Which of these would execute a circuit on a set of qubits which are coupled in a custom way?

    from qiskit import QuantumCircuit, execute, BasicAer
    backend = BasicAer.get_backend('qasm_simulator')
    qc = QuantumCircuit(3)

    # insert code here

## Answer Options

**A.** `execute(qc, backend, shots=1024, coupling_map=[[0,1], [1,2]])`  
**B.** `execute(qc, backend, shots=1024, custom_topology=[[0,1],[2,3]])`  
**C.** `execute(qc, backend, shots=1024, device="qasm_simulator", mode="custom")`  
**D.** `execute(qc, backend, mode="custom")`  

## Question Explanation

This question tests your familiarity with the `execute()` function and defining a custom coupling map.

## References

* [Qiskit execute() Function API](https://qiskit.org/documentation/apidoc/execute.html?highlight=execute#qiskit.execute_function.execute)

## Correct Answer

**A.** `execute(qc, backend, shots=1024, coupling_map=[[0,1], [1,2]])`

## Answer Explanations

### Answer A

`execute(qc, backend, shots=1024, coupling_map=[[0,1], [1,2]])`

This code fragment properly passes positional parameter before keyword arguments, and it also passes a custom coupling map using the `coupling_map=` parameter.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, execute, BasicAer

backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

# Insert answer's code fragment and assign to variable job
job = execute(qc, backend, shots=1024, coupling_map=[[0, 1], [1, 2]])
```

    No classical registers in circuit "circuit-88", counts will be empty.


As you can see, although there is a warning that the output will not be readable, answer A runs flawlessly.

### Answer B

`execute(qc, backend, shots=1024, custom_topology=[[0,1],[2,3]])`

This code fragment properly passes positional parameter before keyword arguments, but it passes a custom coupling map by using a `custom_topology=` keyword.
This should be `coupling_map=`.

#### Let's take a closer look:


```python
import warnings

warnings.filterwarnings("error")

from qiskit import QuantumCircuit, execute, BasicAer

backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

try:
    with warnings.catch_warnings(record=False):
        # Insert answer's code fragment and assign to variable job
        job = execute(qc, backend, shots=1024, custom_topology=[[0, 1], [2, 3]])
except Exception as e:
    print(f"The following warning was raised: {e}")
```

    The following warning was raised: Option custom_topology is not used by this backend


As you can see, answer B raises a warning about the incorrect keyword argument `custom_topology`.

### Answer C

`execute(qc, backend, shots=1024, device="qasm_simulator", mode="custom")`  

Neither the keyword arguments `device=` nor `mode=` are used or recognized.
In addition, no coupling map is passed as a parameter to `execute()`.

#### Let's take a closer look:


```python
import warnings

warnings.filterwarnings("error")

from qiskit import QuantumCircuit, execute, BasicAer

backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

try:
    with warnings.catch_warnings(record=False):
        # Insert answer's code fragment and assign to variable job
        job = execute(qc, backend, shots=1024, device="qasm_simulator", mode="custom")
except Exception as e:
    print(f"The following warning was raised: {e}")
```

    The following warning was raised: Option device is not used by this backend


As you can see, answer C raises a warning about the incorrect keyword argument `device`.

### Answer D

`execute(qc, backend, mode="custom")`  

The keyword argument `mode=` is neither used nor recognized.
In addition, no coupling map is passed as a parameter to `execute()`.

#### Let's take a closer look:


```python
import warnings

warnings.filterwarnings("error")

from qiskit import QuantumCircuit, execute, BasicAer

backend = BasicAer.get_backend("qasm_simulator")
qc = QuantumCircuit(3)

try:
    with warnings.catch_warnings(record=False):
        # Insert answer's code fragment and assign to variable job
        job = execute(qc, backend, mode="custom")
except Exception as e:
    print(f"The following warning was raised: {e}")
```

    The following warning was raised: Option mode is not used by this backend


As you can see, answer D raises a warning about the incorrect keyword argument `mode`.
