---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-05
  - breakdown
  - answer-b
permalink: "questions/question-05/{{ page.fileSlug }}.html"

---


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




    
![png](output_23_0.png)
    



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




    
![png](output_27_0.png)
    



As you can see, answer B does not create a Bell state.