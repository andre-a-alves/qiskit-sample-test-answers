---
title: Question 17
layout: layouts/base.njk
tags:
  - question
  - question-17
---
# Question 17

#### Which line of code would assign a statevector simulator obect to the variable `backend`?

## Answer Options

**A.** `backend = BasicAer.StatevectorSimulatorPy()`  
**B.** `backend = BasicAer.get_backend('statevector_simulator')`  
**C.** `backend = BasicAer.StatevectorSimulatorPy().name()`  
**D.** `backend = BasicAer.get_back('statevector_simulator')`  

## Question Explanation

This question tests your familiarity assigning a simulator object.
These objects, often called *backends*, are retrieved from a provider using the `get_backend()` method.

## References

* [Qiskit BasicAer API](https://qiskit.org/documentation/apidoc/providers_basicaer.html#module-qiskit.providers.basicaer)

## Correct Answer

**B.** `backend = BasicAer.get_backend('statevector_simulator')`  

## Answer Explanations

### Imports

### Answer A

`backend = BasicAer.StatevectorSimulatorPy()`

While there is a Class `StateVectorSimulatorPy()`, and the statevector simulator object that will ultimately be assigned to `backend` is an object of this Class, it is not an attribute of `BasicAer`.
In other words, this is not how you would obtain an instance of that class.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.StatevectorSimulatorPy()
except Exception as e:
    print(f"Exception thrown: {e}")
```

Console Output:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'StatevectorSimulatorPy'

```

As you can see, answer A throws an error.

### Answer B

`backend = BasicAer.get_backend('statevector_simulator')`

This code fragment will obtain a statevector simulator object of Class `StatevectorSimulatorPy` from `BasicAer` and assigned it to variable `backend`.

#### Let's take a closer look:

As you can see, answer B assigns the correct object to `backend`.

### Answer C

`backend = BasicAer.StatevectorSimulatorPy().name()`  

While there is a Class `StateVectorSimulatorPy()`, and the statevector simulator object that will ultimately be assigned to `backend` is an object of this Class, it is not an attribute of `BasicAer`.
In other words, this is not how you would obtain an instance of that class.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.StatevectorSimulatorPy().name()
except Exception as e:
    print(f"Exception thrown: {e}")
```

Console Output:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'StatevectorSimulatorPy'

```

As you can see, answer C throws an error.

### Answer D

`backend = BasicAer.get_back('statevector_simulator')`  

`BasicAer` has no method `get_back()`.
The correct method is `get_backend()`.

#### Let's take a closer look:


```python
try:
    backend = BasicAer.get_back("statevector_simulator")
except Exception as e:
    print(f"Exception thrown: {e}")
```

Console Output:
```bash
Exception thrown: 'BasicAerProvider' object has no attribute 'get_back'

```

As you can see, answer D throws an error.
