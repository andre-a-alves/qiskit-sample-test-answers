---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-05
  - breakdown
  - answer-d
permalink: "questions/question-05/{{ page.fileSlug }}.html"

---


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




    
![png](output_39_0.png)
    



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




    
![png](output_43_0.png)
    



As you can see, answer D does not create a Bell state.
