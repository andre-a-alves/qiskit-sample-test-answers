---
title: Answer A
layout: layouts/simple.njk
tags:
  - question-05
  - breakdown
  - answer-a
permalink: "questions/question-05/{{ page.fileSlug }}.html"

---


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