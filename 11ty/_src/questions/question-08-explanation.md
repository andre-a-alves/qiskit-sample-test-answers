---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-08
  - explanation
permalink: "questions/question-08/{{ page.fileSlug }}.html"

---


It is important to understand Qiskit will output a statevector representation of a two-qubit circuit $\left[\frac{1}{\sqrt{2}} \quad 0 \quad 0 \quad \frac{1}{\sqrt{2}}\right]$ is in the following order: 00, 01, 10, 11.
Therefore, the statevector shown in the output is $\frac{1}{\sqrt{2}}\left(|00\rangle+|11\rangle\right)$.

It is also important to understand `QuantumCurcuit.initialize()` will act upon the qubit passed to it as a parameter.
`initialize()` takes one parameter that is a specific statevector and another that gives the qubit to be placed into that state.
`initialize()` will first return that qubit to a $|0\rangle$ state and then place it into the declared state.

Finally, it is important to remember that once a measurement is taken, the quantum state has a defined value.
Therefore, after measurement, the statevector will always have a probability of 1 for a specific state.
