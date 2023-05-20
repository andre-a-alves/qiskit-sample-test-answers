---
title: Answer D
layout: layouts/simple.njk
tags:
  - question-12
  - breakdown
  - answer-d
permalink: "questions/question-12/{{ page.fileSlug }}.html"

---


```python
qc = QuantumCircuit(1,1)
qc.h(0)
qc.z(0)
qc.h(0)
qc.measure(0,0)
```

This creates a circuit that replaces the two $T$ gates from the given `QuantumCircuit` with a $Z$.
This is would be the equivalent of replacing two $S$ (sometimes called $\sqrt{Z}$) gates or four $T$ (sometimes called $\sqrt[4]{Z}$) gates.

#### Let's take a closer look:


```python
qc = QuantumCircuit(2, 2)

# Use the answer's code fragment to build the first qubit in this circuit
# qc = QuantumCircuit(1,1) # We built a 2 qubit circuit to compare this to the target
qc.h(0)
qc.z(0)
qc.h(0)
# qc.measure(0,0) # The measurement is moved to a single command at the end of the circuit

# Build the initial circuit without a barrier on the second qubit
qc.h(1)
qc.t(1)
qc.t(1)
qc.h(1)
qc.measure([0, 1], [0, 1])

qc.draw("mpl")
```




    
![png](output_33_0.png)
    



Comparing the gates on the two qubits, we see that the two $T$ gates on the second qubit are replaced with a $Z$ gate on the first qubit.
Next, we can plot the Bloch sphere for each qubit and see they are equivalent.


```python
plot_bloch_multivector(
    execute(qc, Aer.get_backend("statevector_simulator")).result().get_statevector(qc)
)
```




    
![png](output_35_0.png)
    



As you can see, the Bloch vectors for each circuit are opposite.
