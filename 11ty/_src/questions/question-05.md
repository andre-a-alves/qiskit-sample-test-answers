---
title: Question 5
layout: layouts/base.njk
tags:
  - question
  - question-05
---
# Question 5

#### Which code fragment will produce a maximally entangled, or Bell, state?

## Answer Options

**A.**
```python
bell = QuantumCircuit(2)  
bell.h(0)  
bell.x(1)  
bell.cx(0, 1)
```
**B.**  
```python
bell = QuantumCircuit(2)  
bell.cx(0, 1)  
bell.h(0)  
bell.x(1)
```
**C.**  
```python
bell = QuantumCircuit (2)  
bell.h(0)  
bell.x(1)  
bell.cz(0, 1)  
```
**D.**  
```python
bell = QuantumCircuit(2)  
bell.h(0)  
bell.h(0)
```

## Question Explanation

A Bell state is one in which two qubits are entangled and there is a 50% probability of each qubit having each value.
Examples of Bell states are a 50% chance for either |00> or |11> or a 50% chance of |01> or |10>.

In Dirac notation, the four Bell states are:
* $|\Phi^{+}\rangle = \frac{1}{\sqrt{2}} \left( |00\rangle + |11\rangle \right)$
* $|\Phi^{-}\rangle = \frac{1}{\sqrt{2}} \left( |00\rangle - |11\rangle \right)$
* $|\Psi^{+}\rangle = \frac{1}{\sqrt{2}} \left( |01\rangle + |10\rangle \right)$
* $|\Psi^{-}\rangle = \frac{1}{\sqrt{2}} \left( |01\rangle - |10\rangle \right)$

## References

* [Qiskit Textbook - Entangled States](https://qiskit.org/textbook/ch-gates/multiple-qubits-entangled-states.html#3.2-Entangled-States-)   
* [MITRE - Intro to Quantum Software Development - Superdense Coding](https://stem.mitre.org/quantum/quantum-algorithms/superdense-coding.html#undoing-the-bell-states)   

## Correct Answer

**A.**  
```python
bell = QuantumCircuit(2)  
bell.h(0)  
bell.x(1)  
bell.cx(0, 1)  
```

## Answer Explanations

### Imports

### Answer A

    bell = QuantumCircuit(2)  
    bell.h(0)  
    bell.x(1)  
    bell.cx(0, 1)  

The combination of an $H$ gate on the first qubit followed by a $CX$ gate between the first and second qubit creates the Bell state.
The $X$ gate before the $CX$ gate just makes the two qubits have opposite values: 50% chance for $|01\rangle$ and 50% chance for $|10\rangle$.

#### Let's take a closer look:


```python
# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.x(1)
bell.cx(0, 1)

# Draw the code fragment
bell.draw("mpl")
```




    
![png](output_13_0.png)
    



Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00\rangle, |01\rangle, |10\rangle, |11\rangle, \right]$.


```python
simulation_result = Aer.get_backend("statevector_simulator").run(bell).result()
array_to_latex(simulation_result.get_statevector(), prefix="\\text{Statevector =}")
```




$$
\text{Statevector =}
\begin{bmatrix}
0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0  \\
 \end{bmatrix}
$$



So this confirms this circuit produces a Bell state with $|01\rangle$ and $|10\rangle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```




    
![png](output_17_0.png)
    



As you can see, answer A creates a Bell state.

### Answer B

    bell = QuantumCircuit(2)  
    bell.cx(0, 1)  
    bell.h(0)  
    bell.x(1)  

Having the $CX$ gate before the $H$ gate does not create a Bell state in the same way as having a $CX$ gate after the $H$ gate would.
Since the circuit starts off in $|00\rangle$, the $CX$ gate doesn’t actually do anything.
The $H$ gate makes the first qubit have a 50% chance of being 0 or 1, but the $X$ gate on the second qubit means that qubit will always be 1.
So, the possible states are $|10\rangle$ or $|11\rangle$.

#### Let's take a closer look:


```python
# Code fragment being explored
bell = QuantumCircuit(2)
bell.cx(0, 1)
bell.h(0)
bell.x(1)

# Draw the code fragment
bell.draw("mpl")
```




    
![png](output_21_0.png)
    



Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00\rangle, |01\rangle, |10\rangle, |11\rangle, \right]$.


```python
simulation_result = Aer.get_backend("statevector_simulator").run(bell).result()
array_to_latex(simulation_result.get_statevector(), prefix="\\text{Statevector =}")
```




$$
\text{Statevector =}
\begin{bmatrix}
0 & 0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}  \\
 \end{bmatrix}
$$



So this confirms this circuit produces a state with $|10\rangle$ and $|11\rangle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```




    
![png](output_25_0.png)
    



As you can see, answer B does not create a Bell state.

### Answer C

    bell = QuantumCircuit (2)  
    bell.h(0)  
    bell.x(1)  
    bell.cz(0, 1)  

The $H$ gate makes the first qubit have a 50% chance of being 0 or 1, but the $X$ gate on the second qubit means that qubit will always be 1.
Since the $CZ$ gate rotates around the Z axis, it does not affect the outcome of the measurement.
Consequently, the possible states are $|10\rangle$ or $|11\rangle$.

#### Let's take a closer look:


```python
# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.x(1)
bell.cz(0, 1)

# Draw the code fragment
bell.draw("mpl")
```




    
![png](output_29_0.png)
    



Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00\rangle, |01\rangle, |10\rangle, |11\rangle, \right]$.


```python
simulation_result = Aer.get_backend("statevector_simulator").run(bell).result()
array_to_latex(simulation_result.get_statevector(), prefix="\\text{Statevector =}")
```




$$
\text{Statevector =}
\begin{bmatrix}
0 & 0 & \frac{\sqrt{2}}{2} & - \frac{\sqrt{2}}{2}  \\
 \end{bmatrix}
$$



So this confirms this circuit produces a state with $|10\rangle$ and $|11\rangle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```




    
![png](output_33_0.png)
    



As you can see, answer C does not create a Bell state.

### Answer D

    bell = QuantumCircuit(2)
    bell.h(0)
    bell.h(0)  

In this circuit, there is no entanglement between the two qubits.
Furthermore, the two $H$ gates applied to the same qubit return the Bloch vector to $|0\rangle$ for that qubit.
Therefore, there is a 100% probability that the outcome will be $|00\rangle$.

#### Let's take a closer look:


```python
# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.h(0)

# Draw the code fragment
bell.draw("mpl")
```




    
![png](output_37_0.png)
    



Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00\rangle, |01\rangle, |10\rangle, |11\rangle, \right]$.


```python
simulation_result = Aer.get_backend("statevector_simulator").run(bell).result()
array_to_latex(simulation_result.get_statevector(), prefix="\\text{Statevector =}")
```




$$
\text{Statevector =}
\begin{bmatrix}
1 & 0 & 0 & 0  \\
 \end{bmatrix}
$$



So this confirms this circuit produces a state with $|00\rangle$ as the only possible output.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```




    
![png](output_41_0.png)
    



As you can see, answer D does not create a Bell state.
