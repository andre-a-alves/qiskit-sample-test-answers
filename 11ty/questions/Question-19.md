# Question 19

#### What would be the fidelity result(s) for these two operators, which differ only by global phase?

    op_a = Operator(XGate())
    op_b = numpy.exp(1j * 0.5) * Operator(XGate())

## Answer Options

**A.** `state_fidelity()` of 1.0  
**B.** `state_fidelity()` and `average_gate_fidelity()` of 1.0  
**C.** `average_gate_fidelity()` and `process_fidelity()` of 1.0  
**D.** `state_fidelity()`, `average_gate_fidelity()` and `process_fidelity()` of 1.0 

## Question Explanation

This question focusses on fidelity, which is a measure of how close two quantum states are to each other.
State fidelity, measured by the `state_fidelity` function, measures the fidelity between two quantum states.
Process fidelity, measured by the `process_fidelity` function, measures the fidelity within a quantum channel or operator, and thus measures the noise within that channel or operator.
Average gate fidelity, measured by the `average_gate_fidelity` function, measures the fidelity of multiple gates within a quantum channel.

## References

* [Qiskit state_fidelity() function API](https://qiskit.org/documentation/stubs/qiskit.quantum_info.state_fidelity.html)
* [Qiskit average_gate_fidelity() function API](https://qiskit.org/documentation/stubs/qiskit.quantum_info.average_gate_fidelity.html)
* [Qiskit process_fidelity() function API](https://qiskit.org/documentation/stubs/qiskit.quantum_info.average_gate_fidelity.html)

## Correct Answer

**C.** `average_gate_fidelity()` and `process_fidelity()` of 1.0  

## Answer Explanation

First we begin by entering the given code to create the two operators themselves.


```python
import numpy
from qiskit.quantum_info import Operator, process_fidelity
from qiskit.circuit.library import XGate

op_a = Operator(XGate())
op_b = numpy.exp(1j * 0.5) * Operator(XGate())
```

Next, we look at the first operator `op_a`.


```python
from qiskit.visualization import array_to_latex

array_to_latex(op_a, prefix="op_a: ")
```




$$
op_a: 
\begin{bmatrix}
0 & 1  \\
 1 & 0  \\
 \end{bmatrix}
$$



Followed by the second operator `op_b`.


```python
array_to_latex(op_b, prefix="op_b: ")
```




$$
op_b: 
\begin{bmatrix}
0 & 0.8775825619 + 0.4794255386 i  \\
 0.8775825619 + 0.4794255386 i & 0  \\
 \end{bmatrix}
$$



### 1. `state_fidelity()`

This is a trick question.
We cannot measure the state fidelity between the two operators, because they do not have states.
If we try to obtain the state fidelity, Qiskit will throw an error.


```python
from qiskit.quantum_info import state_fidelity

try:
    state_fidelity(op_a, op_b)
except Exception as e:
    print(f"Exception thrown: {e}")
```

    Exception thrown: 'Input is not a quantum state'


Even though we know we cannot obtain the state fidelity of the operators, just for fun we will obtain the state fidelity between two circuit that implement those operators.
However, it is important you first understand `state_vector` will not return a value, therefore it is undefined when it comes to answering the question.

To get a state fidelity, we created two `QuantumCircuit` objects and add the operators as `Instruction` objects.


```python
from qiskit import BasicAer, execute, QuantumCircuit

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



### 2. `average_gate_fidelity()`

To obtain the average gate fidelity between the two operators, we can just pass the two operators as parameters to the `average_gate_fidelity` function.


```python
from qiskit.quantum_info import average_gate_fidelity

average_gate_fidelity(op_a, target=op_b)
```




    1.0



As you can see above, the `average_gate_fidelity` is 1.

### 3. `process_fidelity()`

To obtain the process fidelity between the two operators, we can just pass the two operators as parameters to the `process_fidelity` function.


```python
from qiskit.quantum_info import process_fidelity

process_fidelity(op_a, target=op_b)
```




    1.0



As you can see above, the `process_fidelity` is 1.
