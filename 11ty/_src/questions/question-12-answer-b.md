---
title: Answer B
layout: layouts/simple.njk
tags:
  - question-12
  - breakdown
  - answer-b
permalink: "questions/question-12/{{ page.fileSlug }}.html"

---


```python
qc = QuantumCircuit(1,1)
qc.measure(0,0)
```
This creates a circuit that is still in the $|0\rangle$ state by applying no gates.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2, 2)

# Use the answer's code fragment to build the first qubit in this circuit
# qc = QuantumCircuit(1,1) # We built a 2 qubit circuit to compare this to the target
qc.measure(0, 0)

# Build the initial circuit without a barrier on the second qubit
qc.h(1)
qc.t(1)
qc.t(1)
qc.h(1)
qc.measure(1, 1)

qc.draw("mpl")
```




    
![png](output_21_0.png)
    



Comparing the gates on the two qubits, we see that the first qubit has no gates applied whil the second quabit has the same gates applied as the given circuit.
Next, we can plot the Bloch sphere for each qubit and see they are not equivalent.


```python
plot_bloch_multivector(
    execute(qc, Aer.get_backend("statevector_simulator")).result().get_statevector(qc)
)
```




    
![png](output_23_0.png)
    



As you can see, the Bloch vectors for each circuit are opposite.