---
title: Question 3
layout: layouts/base.njk
tags:
  - question
  - question-03
---
# Question 3

#### Assuming the fragment below, which three code fragments would produce the circuit illustrated? (Select three)
```python
inp_reg = QuantumRegister(2, name='inp')
ancilla = QuantumRegister(1, name='anc')
qc = QuantumCircuit(inp_reg, ancilla)
```

<img alt="Quantum circuit" src="data:image/png;base64,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" />

## Answer Options

**A.**
```python
qc.h(inp_reg)  
qc.x(ancilla)  
qc.draw()
```
**B.**
```python
qc.h(inp_reg[0:2])  
qc.x(ancilla[0])  
qc.draw()
```
**C.**  
```python
qc.h(inp_reg[0:1])  
qc.x(ancilla[0])  
qc.draw()
```
**D.**
```python
qc.h(inp_reg[0])
qc.h(inp_reg[1])
qc.x(ancilla[0])
qc.draw()
```
**E.**
```python
qc.h(inp_reg[1])  
qc.h(inp_reg[2])  
qc.x(ancilla[1])  
qc.draw()
```
**F.**  
```python
qc.h(inp_reg)  
qc.h(inp_reg)  
qc.x(ancilla)  
qc.draw()
```

## Question Explanation

This important piece to understand from this question is that in Python, the first element of a list has an index of 0.
One must also understand that the notation __[ x : y ]__ mean the numbers will begin at x, and y will be the first index not included in the list.
So [0:3] will be [0, 1, 2] and [4:5] will be [4].


```python
sample = [i for i in range(5)]
print(sample)
print(sample[0:3])
print(sample[4:5])
```

Console Output:
```bash
[0, 1, 2, 3, 4]
[0, 1, 2]
[4]

```

## References

[What's New in Python 2.3 - 15 Extended Slices](https://docs.python.org/2.3/whatsnew/section-slices.html)

## Correct Answer

**A.**
```python
qc.h(inp_reg)  
qc.x(ancilla)  
qc.draw()
```
**B.**  
```python
qc.h(inp_reg[0:2])  
qc.x(ancilla[0])  
qc.draw()  
```
**D.**
```python
qc.h(inp_reg[0])  
qc.h(inp_reg[1])  
qc.x(ancilla[0])  
qc.draw()  
```

## Answer Explanations

### Imports

### Answer A

    qc.h(inp_reg)  
    qc.x(ancilla)  
    qc.draw() 

This would apply an $H$ gate to both `inp_reg` qubits and an $X$ gate to the `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg)
qc.x(ancilla)
qc.draw("mpl")
```




    
![png](output_14_0.png)
    



As you can see, answer A results in the correct circuit illustration.

### Answer B

    qc.h(inp_reg[0:2])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first two `inp_reg` qubits, and an $X$ gate to the first `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0:2])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_18_0.png)
    



As you can see, answer B results in the correct circuit illustration.

### Answer C

    qc.h(inp_reg[0:1])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first `inp_reg` qubit and an $X$ gate to the first `ancilla` qubit.
However, no gate would be applied to the second `inp_reg` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0:1])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_22_0.png)
    



As you can see, the second `inp_reg` qubit has no gate applied and does not match the circuit illustrated.

### Answer D

    qc.h(inp_reg[0])  
    qc.h(inp_reg[1])  
    qc.x(ancilla[0])  
    qc.draw()  

This would apply an $H$ gate to the first `inp_reg` qubit, then an $H$ gate to the second `inp_reg` qubit, and finally an $X$ gate to the first `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg[0])
qc.h(inp_reg[1])
qc.x(ancilla[0])
qc.draw("mpl")
```




    
![png](output_26_0.png)
    



As you can see, answer D results in the correct circuit illustration.

### Answer E

    qc.h(inp_reg[1])  
    qc.h(inp_reg[2])  
    qc.x(ancilla[1])  
    qc.draw()  

This would apply an $H$ gate to the second `inp_reg` qubit, an $H$ gate to a nonexistant third `inp_reg` qubit resulting in an error, and an $X$ gate to the nonexistant second `ancilla` qubit.
This code will result in an error

#### Let's take a closer look:


```python
try:
    inp_reg = QuantumRegister(2, name="inp")
    ancilla = QuantumRegister(1, name="anc")
    qc = QuantumCircuit(inp_reg, ancilla)
    qc.h(inp_reg[1])
    qc.h(inp_reg[2])
    qc.x(ancilla[1])
    qc.draw("mpl")
except Exception as e:
    print(f"Error: {e}")
```

Console Output:
```bash
Error: list index out of range

```

As you can see, answer E results in an error and cannot be run.

### Answer F

    qc.h(inp_reg)  
    qc.h(inp_reg)  
    qc.x(ancilla)  
    qc.draw()  

This would apply two $H$ gates to all of the `inp_reg` qubits, and an $X$ gate to the `ancilla` qubit.

#### Let's take a closer look:


```python
inp_reg = QuantumRegister(2, name="inp")
ancilla = QuantumRegister(1, name="anc")
qc = QuantumCircuit(inp_reg, ancilla)
qc.h(inp_reg)
qc.h(inp_reg)
qc.x(ancilla)
qc.draw("mpl")
```




    
![png](output_34_0.png)
    



As you can see, answer F results in a circuit with too many $H$ gates.
