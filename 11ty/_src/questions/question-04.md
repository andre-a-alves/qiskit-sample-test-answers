---
title: Question 4
layout: layouts/base.njk
tags:
  - question
  - question-04
---
# Question 4

#### Given an empty `QuantumCircuit` object, `qc`, with three qubits and three classical bits, which one of these code fragments would create this circuit?

<img alt="Quantum circuit" src="data:image/png;base64,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" />

## Answer Options

**A.** `qc.measure([0,1,2], [0,1,2])`  
**B.** `qc.measure([0,0], [1,1], [2,2])`  
**C.** `qc.measure_all()`  
**D.** `qc.measure(0,1,2)`

## Question Explanation

This question requires knowledge of both the `QuantumCircuit.measure()` method and the `QuantumCircuit.measure_all()` method.
The `measure()` method receives two parameters: an integer or a list with the integers of qubits to be measured, and an integer or a list of integers with the classical bits to receive the measurements.
The `measure_all()` method will measure every qubit, but it will create a new classical bit for each measurement unless passed the parameter `add_bits=False`.

## References

* [Qiskit QuantumCircuit.measure() API](https://qiskit.org/documentation/stubs/qiskit.circuit.QuantumCircuit.measure.html#qiskit.circuit.QuantumCircuit.measure)   
* [Qiskit QuantumCircuit.measure_all() API](https://qiskit.org/documentation/stubs/qiskit.circuit.QuantumCircuit.measure_all.html#qiskit.circuit.QuantumCircuit.measure_all)   

## Correct Answer

**A.** `qc.measure([0,1,2], [0,1,2])`

## Answer Explanations

### Imports

### Answer A

`qc.measure([0,1,2], [0,1,2])`

This will measure qubit 0 on classical bit 0, qubit 1 on classical bit 1, and qubit 2 on classical bit 2.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)
qc.measure([0, 1, 2], [0, 1, 2])
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, answer A creates the correct circuit.

### Answer B

`qc.measure([0,0], [1,1], [2,2])`

This is improper syntax; `measure()` cannot receive three parameters.
This code fragment will result in an error.

#### Let's take a closer look:


```python
try:
    qc = QuantumCircuit(3, 3)
    qc.measure([0, 0], [1, 1], [2, 2])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

Console Output:
```bash
Error: QuantumCircuit.measure() takes 3 positional arguments but 4 were given

```

As you can see, answer B raises and error and cannot be run.

### Answer C

`qc.measure_all()`

This will add new classical bits to store the measurements.

#### Let's take a closer look:


```python
qc = QuantumCircuit(3, 3)
qc.measure_all()
qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, answer C generates new classical bits, causing the circuit to be different from the circuit shown in the question.

### Answer D

`qc.measure(0,1,2)`

This is improper syntax; `measure()` cannot receive three parameters.
This code fragment will result in an error.

#### Let's take a closer look:


```python
try:
    qc = QuantumCircuit(3, 3)
    qc.measure(0, 1, 2)
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

Console Output:
```bash
Error: QuantumCircuit.measure() takes 3 positional arguments but 4 were given

```

As you can see, answer D raises and error and cannot be run.
