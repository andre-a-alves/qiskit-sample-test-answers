# Question 16

#### Which three simulators are available in BasicAer?


## Answer Options

**A.** `qasm_simulator`  
**B.** `basic_qasm_simulator`  
**C.** `statevector_simulator`  
**D.** `unitary_simulator`  
**E.** `quantum_simulator`  
**F.** `quantum_circuit_simulator`  

## Question Explanation

`BasicAer` is the old version of the backend provider `Aer`, and it offers less backend options than `Aer`.
This question checks that you know which simulators are contained within the provider.

## References

* [Qiskit BasicAer API](https://qiskit.org/documentation/apidoc/providers_basicaer.html#module-qiskit.providers.basicaer)

## Correct Answers

**A.** `qasm_simulator`  
**C.** `statevector_simulator`  
**D.** `unitary_simulator`  

## Answer Explanation

To verify the answer to this question, we can just print out a list of the backends contained in BasicAer.


```python
from qiskit import BasicAer

for backend in BasicAer.backends():
    print(backend)
```

    qasm_simulator
    statevector_simulator
    unitary_simulator


As you can see, these are the available backends for `BasicAer`.
