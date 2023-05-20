---
title: state fidelity
layout: layouts/simple.njk
tags:
  - question-19
  - breakdown
  - state-fidelity
permalink: "questions/question-19/{{ page.fileSlug }}.html"

---


This is a trick question.
We cannot measure the state fidelity between the two operators, because they do not have states.
If we try to obtain the state fidelity, Qiskit will throw an error.


```python
try:
    state_fidelity(op_a, op_b)
except Exception as e:
    print(f"Exception thrown: {e}")
```

**Output**:
```bash
Exception thrown: 'Input is not a quantum state'

```

Even though we know we cannot obtain the state fidelity of the operators, just for fun we will obtain the state fidelity between two circuit that implement those operators.
However, it is important you first understand `state_vector` will not return a value, therefore it is undefined when it comes to answering the question.

To get a state fidelity, we created two `QuantumCircuit` objects and add the operators as `Instruction` objects.


```python
# Build our circuits
qc_a = QuantumCircuit(1)
qc_b = QuantumCircuit(1)

# Convert our operators to instructions
inst_a = op_a.to_instruction()
inst_b = op_b.to_instruction()

# Add the instructions to the circuits
qc_a.append(inst_a, qargs=[0])
qc_b.append(inst_b, qargs=[0])

# obtains state vectors for each circuit
state_a = (
    execute(qc_a, BasicAer.get_backend("statevector_simulator"))
    .result()
    .get_statevector(qc_a)
)
state_b = (
    execute(qc_b, BasicAer.get_backend("statevector_simulator"))
    .result()
    .get_statevector(qc_b)
)
```

Then we can look at the state of the first circuit.


```python
array_to_latex(state_a, prefix="|\Psi_{a}\\rangle = ")
```




$$
|\Psi_{a}\rangle = 
\begin{bmatrix}
0 & 1  \\
 \end{bmatrix}
$$



And we can look at the state of the second circuit.


```python
array_to_latex(state_b, prefix="|\Psi_{b}\\rangle = ")
```




$$
|\Psi_{b}\rangle = 
\begin{bmatrix}
0 & 0.8775825619 + 0.4794255386 i  \\
 \end{bmatrix}
$$



Finally, we can obtain the `state_fidelity` between the states of these two circuits.
However, remember once again that there is no state fidelity between operators.


```python
state_fidelity(state_a, state_b)
```




    1.0

