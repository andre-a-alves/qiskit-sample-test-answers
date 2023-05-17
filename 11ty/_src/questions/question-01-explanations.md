---
title: Answer Explanations
layout: layouts/simple.njk
tags:
  - question-01
  - explanations
permalink: "questions/question-01/{{ page.fileSlug }}.html"

---


### Imports

### Answer A

```python
QuantumCircuit(4, 4)
```

This is a valid constructor for a QuantumCircuit, because it passes two integer numbers: one representing the number of qubits, and another for the number of classical bits.
With four qubits and four classical bits, this is the correct answer.

Let's take a closer look:


```python
qc = QuantumCircuit(4, 4)
qc.draw("mpl")
```




    
![png](output_13_0.png)
    



As you can see, the resulting circuit has four qubits and four classical bits.

### Answer B

```python
QuantumCircuit(4)
```

This is a valid constructor for a `QuantumCircuit`, because it passes an integer number representing the number of qubits.
But by only creating a circuit with four qubits, there are no classical bits.

Let's take a closer look:


```python
qc = QuantumCircuit(4)
qc.draw("mpl")
```




    
![png](output_17_0.png)
    



As you can see, the resulting circuit has four qubits but no classical bits.

### Answer C

```python
QuantumCircuit(QuantumRegister(4, ‘qro’), QuantumRegister(4, ‘cr1’))
```

This is a valid constructor for a `QuantumCircuit` because it passes a list of registers.
But in this case, the resulting circuit has eight qubits and no classical bits.

Let's take a closer look:


```python
qc = QuantumCircuit(QuantumRegister(4, "qro"), QuantumRegister(4, "cr1"))
qc.draw("mpl")
```




    
![png](output_21_0.png)
    



As you can see, the resulting circuit has eight qubits and no classical bits.

### Answer D

```python
QuantumCircuit([4, 4])
```

This is not a valid constructor for a `QuantumCircuit`, because a Python list of integers is not a valid parameter.

Let's take a closer look:


```python
try:
    qc = QuantumCircuit([4, 4])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

**Output**:
```bash
Error: 'Expected an instance of Qubit, Clbit, or AncillaQubit, but was passed 4'

```

As you can see, this is not a valid constructor call.
