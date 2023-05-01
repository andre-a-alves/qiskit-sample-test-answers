---
title: Question 20
layout: layouts/base.njk
tags: [question]
---
# Question 20

#### Given this code fragment, which output fits most closely with the measurement probability distribution?

    qc = QuantumCircuit(2, 2)
    qc.x(0)
    qc.measure([0,1], [0,1])
    simulator = Aer.get_backend('qasm_simulator')
    result = execute(qc, simulator, shots=1000).result()
    counts = result.get_counts(qc)
    print(counts)

## Answer Options

**A.** `{'00': 1000}`  
**B.** `{'01': 1000}`  
**C.** `{'10': 1000}`  
**D.** `{'11': 1000}`  

## Question Explanation

This question asks us to visualize a circuit and determine the output of the measurement.

The important concepts one needs in order to understand this question is initial state, the result of an $X$ gate, and endianness.
Endianness has to do with whether the last digit represents the largest or the smallest number.
Qiskit uses little-endianness, which means qubit 0 will be the right-most digit, and qubit 1 will be one digit to the left.
In other words, $|01angle$ tells us `qc[0]` is 1 and `qc[1]` is 0.

## References

* [Qiskit Textbook - Single Qubit Gates](https://qiskit.org/textbook/ch-states/single-qubit-gates.html)
* [Qiskit execute() function API](https://qiskit.org/documentation/apidoc/execute.html?highlight=execute#qiskit.execute_function.execute)
* [Qiskit Textbook - Basis Vector Ordering in Qiskit](https://qiskit.org/documentation/tutorials/circuits/3_summary_of_quantum_operations.html#Basis-vector-ordering-in-Qiskit)

## Correct Answer

**B.** `{'01': 1000}` 

## Answer Explanation

We begin by looking at the circuit itself, which has an $X$ gate operating on the first qubit, and measurements from the first qubit to the first classical bit and the second qubit to the second classical bit.


```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)
qc.x(0)
qc.measure([0, 1], [0, 1])

qc.draw("mpl")
```




    
![png](Question-20_files/Question-20_10_0.png)
    



Understanding the the circuit began in the $|00angle$ state and the $X$ gate flipped the first qubit to 1, we know the result should be $|01angle$.


```python
from qiskit import Aer, execute

simulator = Aer.get_backend("qasm_simulator")
result = execute(qc, simulator, shots=1000).result()
counts = result.get_counts(qc)
print(counts)
```

    {'01': 1000}


As you can see above, our analysis was sound, and the output is answer B.
