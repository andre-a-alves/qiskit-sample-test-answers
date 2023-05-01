---
title: Question 8
layout: layouts/base.njk
---
# Question 8

#### Which two code fragments, when inserted into the code below, will produce the statevector shown in the output?

    from math import sqrt
    qc = QuantumCircuit(2)
    # Insert fragment here
    simulator = Aer.get_backend('statevector_simulator')
    result = execute(qc, simulator).result()
    statevector = result.get_statevector()
    print(statevector)

**Output:**  
    `[0.707+0.j 0.+0.j 0.+0.j 0.707+0.j]`

## Answer Options

**A.**  

    v = [1/sqrt(2), 0, 0, 1/sqrt(2)]  
    qc.initialize(v, [0,1])      
**B.**  

    qc.h(0)  
    qc.cx(0,1)  
**C.**  

    v1, v2 = [1,0], [0,1]  
    qc.initialize(v1,0)  
    qc.initialize(v2,1)  
**D.**  

    qc.cx(0,1)  
    qc.measure_all()  
**E.**  

    qc.h(0)  
    qc.h(1)  
    qc.measure_all()  

## Question Explanation

It is important to understand Qiskit will output a statevector representation of a two-qubit circuit $\left[rac{1}{\sqrt{2}} \quad 0 \quad 0 \quad rac{1}{\sqrt{2}}ight]$ is in the following order: 00, 01, 10, 11.
Therefore, the statevector shown in the output is $rac{1}{\sqrt{2}}\left(|00angle+|11angleight)$.

It is also important to understand `QuantumCurcuit.initialize()` will act upon the qubit passed to it as a parameter.
`initialize()` takes one parameter that is a specific statevector and another that gives the qubit to be placed into that state.
`initialize()` will first return that qubit to a $|0angle$ state and then place it into the declared state.

Finally, it is important to remember that once a measurement is taken, the quantum state has a defined value.
Therefore, after measurement, the statevector will always have a probability of 1 for a specific state.

## References

* [Qiskit Textbook - Representing Qubit States](https://qiskit.org/textbook/ch-states/representing-qubit-states.html)
* [Qiskit QuantumCircuit.initialize() API](https://qiskit.org/documentation/stubs/qiskit.circuit.QuantumCircuit.initialize.html#qiskit.circuit.QuantumCircuit.initialize)

## Correct Answer

**A.**  

    v = [1/sqrt(2), 0, 0, 1/sqrt(2)]  
    qc.initialize(v, [0,1])      
**B.**  

    qc.h(0)  
    qc.cx(0,1)  

## Answer Explanations

### Answer A

    v = [1/sqrt(2), 0, 0, 1/sqrt(2)]  
    qc.initialize(v, [0,1]) 

This code fragment will initialize the two qubits in the QuantumCircuit directly into the desired statevector. 

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute
from math import sqrt

qc = QuantumCircuit(2)

# Answer Fragment
v = [1 / sqrt(2), 0, 0, 1 / sqrt(2)]
qc.initialize(v, [0, 1])

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

    Statevector([0.70710678+0.j, 0.        +0.j, 0.        +0.j,
                 0.70710678+0.j],
                dims=(2, 2))


As you can see, answer A produces the desired statevector.

### Answer B

    qc.h(0)  
    qc.cx(0,1)  

This well-known circuit pattern creates the Bell state of $rac{1}{\sqrt{2}}\left(|00angle+|11angleight)$.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute
from math import sqrt

qc = QuantumCircuit(2)

# Answer Fragment
qc.h(0)
qc.cx(0, 1)

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

    Statevector([0.70710678+0.j, 0.        +0.j, 0.        +0.j,
                 0.70710678+0.j],
                dims=(2, 2))


As you can see, answer B produces the desired statevector.

### Answer C

    v1, v2 = [1,0], [0,1]  
    qc.initialize(v1,0)  
    qc.initialize(v2,1)

This code fragment places the circuit into the constant state of $|10angle$ by initiailizeing the first qubit as 0 and the second qubit as 1.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute
from math import sqrt

qc = QuantumCircuit(2)

# Answer Fragment
v1, v2 = [1, 0], [0, 1]
qc.initialize(v1, 0)
qc.initialize(v2, 1)

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

    Statevector([0.+0.j, 0.+0.j, 1.+0.j, 0.+0.j],
                dims=(2, 2))


As you can see, the output statevector is $\left[ 0 \quad 0 \quad 1 \quad 0 ight]$.

### Answer D

    qc.cx(0,1)  
    qc.measure_all()  

The initial $CX$ gate does not do anything, since the control bit remains in the 0 state.
Therefore, this code fragment remains in the $|00angle$ state.

Without considering the $CX$ gate, the `measure_all()` method collapses the statevector into a measured state with a probability of 1.
This does nothing to this specific circuit, because it already had a probability of 1.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute
from math import sqrt

qc = QuantumCircuit(2)

# Answer Fragment
qc.cx(0, 1)
qc.measure_all()

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

    Statevector([1.+0.j, 0.+0.j, 0.+0.j, 0.+0.j],
                dims=(2, 2))


As you can see, the output statevector is $\left[ 1 \quad 0 \quad 0 \quad 0 ight]$.

### Answer E

    qc.h(0)  
    qc.h(1)  
    qc.measure_all() 

This circuit is initially put into a state where every possibility is equally probably, or $rac{1}{2} \left(|00angle + |01angle + |10angle + |11angle ight)$ which has a statevector of $\left[ rac{1}{2} \quad rac{1}{2} \quad rac{1}{2} \quad rac{1}{2} ight]$.
However, measuring the qubits collapses the state, so the statevector would always be `1.+0.j` for one possible and `0.+0.j` for all the others.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, execute
from math import sqrt

qc = QuantumCircuit(2)

# Answer Fragment
qc.h(0)
qc.h(1)
qc.measure_all()

simulator = Aer.get_backend("statevector_simulator")
result = execute(qc, simulator).result()
statevector = result.get_statevector()
print(statevector)
```

    Statevector([0.+0.j, 1.+0.j, 0.+0.j, 0.+0.j],
                dims=(2, 2))


As you can see, answer E results in a collapsed state where the statevector is 1 for one value and 0 for all others.
