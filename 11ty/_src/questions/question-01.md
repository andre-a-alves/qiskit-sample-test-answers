---
title: Question 1
layout: layouts/base.njk
tags:
  - question
  - question-01
---
# Question 1

#### Which statement will create a quantum circuit with four quantum bits and four classical bits?

## Answer Options

**A.** `QuantumCircuit(4, 4)`  
**B.** `QuantumCircuit(4)`  
**C.** `QuantumCircuit(QuantumRegister(4, ‘qro’), QuantumRegister(4, ‘cr1’))`  
**D.** `QuantumCircuit([4, 4])`

## Question Explanation

When creating a `QuantumCircuit`, you may choose from the following paramaters to pass to the constructor:
* A list of registers that will make up the circuit
* A list of integers stating how many quantum and/or classical bits to include in the circuit
* A list of Python lists containing Bit objects (either Qubit or CBit objects)


## References

[Qiskit QuantumCircuit API](https://qiskit.org/documentation/stubs/qiskit.circuit.QuantumCircuit.html?highlight=quantumcircuit#qiskit.circuit.QuantumCircuit)

## Correct Answer

**A.** `QuantumCircuit(4, 4)`  

## Answer Explanations

### Imports

### Answer A

`QuantumCircuit(4, 4)`

This is a valid constructor for a QuantumCircuit, because it passes two integer numbers: one representing the number of qubits, and another for the number of classical bits.
With four qubits and four classical bits, this is the correct answer.

#### Let's take a closer look:


```python
qc = QuantumCircuit(4, 4)
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, the resulting circuit has four qubits and four classical bits.

### Answer B

`QuantumCircuit(4)`

This is a valid constructor for a `QuantumCircuit`, because it passes an integer number representing the number of qubits.
But by only creating a circuit with four qubits, there are no classical bits.

#### Let's take a closer look:


```python
qc = QuantumCircuit(4)
qc.draw("mpl")
```




    
![png](output_17_0.png)
    



As you can see, the resulting circuit has four qubits but no classical bits.

### Answer C

`QuantumCircuit(QuantumRegister(4, ‘qro’), QuantumRegister(4, ‘cr1’))`

This is a valid constructor for a `QuantumCircuit` because it passes a list of registers.
But in this case, the resulting circuit has eight qubits and no classical bits.

#### Let's take a closer look:


```python
qc = QuantumCircuit(QuantumRegister(4, "qro"), QuantumRegister(4, "cr1"))
qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, the resulting circuit has eight qubits and no classical bits.

### Answer D

`QuantumCircuit([4, 4])`

This is not a valid constructor for a `QuantumCircuit`, because a Python list of integers is not a valid parameter.

#### Let's take a closer look:


```python
try:
    qc = QuantumCircuit([4, 4])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

Console Output:
```bash
Error: 'Expected an instance of Qubit, Clbit, or AncillaQubit, but was passed 4'

```

As you can see, this is not a valid constructor call.
