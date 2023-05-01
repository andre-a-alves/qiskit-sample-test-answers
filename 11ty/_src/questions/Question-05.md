---
title: Question 5
layout: layouts/base.njk
tags: [question]
---
# Question 5

#### Which code fragment will produce a maximally entangled, or Bell, state?

## Answer Options

**A.**  
    bell = QuantumCircuit(2)  
    bell.h(0)  
    bell.x(1)  
    bell.cx(0, 1)  
**B.**  
    bell = QuantumCircuit(2)  
    bell.cx(0, 1)  
    bell.h(0)  
    bell.x(1)  
**C.**  
    bell = QuantumCircuit (2)  
    bell.h(0)  
    bell.x(1)  
    bell.cz(0, 1)  
**D.**  
    bell = QuantumCircuit(2)  
    bell.h(0)  
    bell.h(0)

## Question Explanation

A Bell state is one in which two qubits are entangled and there is a 50% probability of each qubit having each value.
Examples of Bell states are a 50% chance for either |00> or |11> or a 50% chance of |01> or |10>.

In Dirac notation, the four Bell states are:
* $|\Phi^{+}angle = rac{1}{\sqrt{2}} \left( |00angle + |11angle ight)$
* $|\Phi^{-}angle = rac{1}{\sqrt{2}} \left( |00angle - |11angle ight)$
* $|\Psi^{+}angle = rac{1}{\sqrt{2}} \left( |01angle + |10angle ight)$
* $|\Psi^{-}angle = rac{1}{\sqrt{2}} \left( |01angle - |10angle ight)$

## References

* [Qiskit Textbook - Entangled States](https://qiskit.org/textbook/ch-gates/multiple-qubits-entangled-states.html#3.2-Entangled-States-)   
* [MITRE - Intro to Quantum Software Development - Superdense Coding](https://stem.mitre.org/quantum/quantum-algorithms/superdense-coding.html#undoing-the-bell-states)   

## Correct Answer

**A.**  
    bell = QuantumCircuit(2)  
    bell.h(0)  
    bell.x(1)  
    bell.cx(0, 1)  

## Answer Explanations

### Answer A

    bell = QuantumCircuit(2)  
    bell.h(0)  
    bell.x(1)  
    bell.cx(0, 1)  

The combination of an $H$ gate on the first qubit followed by a $CX$ gate between the first and second qubit creates the Bell state.
The $X$ gate before the $CX$ gate just makes the two qubits have opposite values: 50% chance for $|01angle$ and 50% chance for $|10angle$.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, assemble
from qiskit.visualization import plot_histogram, array_to_latex

# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.x(1)
bell.cx(0, 1)

# Save the statevector for later
bell.save_statevector()

# Draw the code fragment
bell.draw("mpl")
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    Cell In [1], line 11
          8 bell.cx(0, 1)
         10 # Save the statevector for later
    ---> 11 bell.save_statevector()
         13 # Draw the code fragment
         14 bell.draw('mpl')


    AttributeError: 'QuantumCircuit' object has no attribute 'save_statevector'


Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00angle, |01angle, |10angle, |11angle, ight]$.


```python
simulation_result = Aer.get_backend("aer_simulator").run(assemble(bell)).result()
array_to_latex(simulation_result.get_statevector(), prefix="\text{Statevector =}")
```

So this confirms this circuit produces a Bell state with $|01angle$ and $|10angle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```

As you can see, answer A creates a Bell state.

### Answer B

    bell = QuantumCircuit(2)  
    bell.cx(0, 1)  
    bell.h(0)  
    bell.x(1)  

Having the $CX$ gate before the $H$ gate does not create a Bell state in the same way as having a $CX$ gate after the $H$ gate would.
Since the circuit starts off in $|00angle$, the $CX$ gate doesn’t actually do anything.
The $H$ gate makes the first qubit have a 50% chance of being 0 or 1, but the $X$ gate on the second qubit means that qubit will always be 1.
So, the possible states are $|10angle$ or $|11angle$.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, assemble
from qiskit.visualization import plot_histogram, array_to_latex

# Code fragment being explored
bell = QuantumCircuit(2)
bell.cx(0, 1)
bell.h(0)
bell.x(1)

# Save the statevector for later
bell.save_statevector()

# Draw the code fragment
bell.draw("mpl")
```

Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00angle, |01angle, |10angle, |11angle, ight]$.


```python
simulation_result = Aer.get_backend("aer_simulator").run(assemble(bell)).result()
array_to_latex(simulation_result.get_statevector(), prefix="\text{Statevector =}")
```

So this confirms this circuit produces a state with $|10angle$ and $|11angle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```

As you can see, answer B does not create a Bell state.

### Answer C

    bell = QuantumCircuit (2)  
    bell.h(0)  
    bell.x(1)  
    bell.cz(0, 1)  

The $H$ gate makes the first qubit have a 50% chance of being 0 or 1, but the $X$ gate on the second qubit means that qubit will always be 1.
Since the $CZ$ gate rotates around the Z axis, it does not affect the outcome of the measurement.
Consequently, the possible states are $|10angle$ or $|11angle$.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, assemble
from qiskit.visualization import plot_histogram, array_to_latex

# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.x(1)
bell.cz(0, 1)

# Save the statevector for later
bell.save_statevector()

# Draw the code fragment
bell.draw("mpl")
```

Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00angle, |01angle, |10angle, |11angle, ight]$.


```python
simulation_result = Aer.get_backend("aer_simulator").run(assemble(bell)).result()
array_to_latex(simulation_result.get_statevector(), prefix="\text{Statevector =}")
```

So this confirms this circuit produces a state with $|10angle$ and $|11angle$ as possible outputs.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```

As you can see, answer C does not create a Bell state.

### Answer D

    bell = QuantumCircuit(2)
    bell.h(0)
    bell.h(0)  

In this circuit, there is no entanglement between the two qubits.
Furthermore, the two $H$ gates applied to the same qubit return the Bloch vector to $|0angle$ for that qubit.
Therefore, there is a 100% probability that the outcome will be $|00angle$.

#### Let's take a closer look:


```python
from qiskit import QuantumCircuit, Aer, assemble
from qiskit.visualization import plot_histogram, array_to_latex

# Code fragment being explored
bell = QuantumCircuit(2)
bell.h(0)
bell.h(0)

# Save the statevector for later
bell.save_statevector()

# Draw the code fragment
bell.draw("mpl")
```

Now that we see the circuit, we can examine the resulting statevector and see this is a Bell state.
Remember that the statevector will be represented as $\left[ |00angle, |01angle, |10angle, |11angle, ight]$.


```python
simulation_result = Aer.get_backend("aer_simulator").run(assemble(bell)).result()
array_to_latex(simulation_result.get_statevector(), prefix="\text{Statevector =}")
```

So this confirms this circuit produces a state with $|00angle$ as the only possible output.

We can go ahead and plot the results of a simulation as well to make it even clearer.


```python
plot_histogram(simulation_result.get_counts(bell))
```

As you can see, answer D does not create a Bell state.
