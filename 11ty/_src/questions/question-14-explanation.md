---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-14
  - explanation
permalink: "questions/question-14/{{ page.fileSlug }}.html"

---


There are a number of different backends on which we may execute our circuits.
We get those backends from the `Aer.get_backend()` method, to which we pass the desired backend.
In this case, we want a QASM simulator, which is passed as `'qasm_simulator'`.

The circuit should also be measured 1024 times.
Each time a circuit is run is called a *shot*, therefore, we want an execution that includes 1024 shots.

While all four answers have the same coupling map, it is worth mentioning that coupling map gives the connectivity constraint of a backend for Qiskit's compiler.
