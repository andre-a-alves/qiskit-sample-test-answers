---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-11
  - explanation
permalink: "questions/question-11/{{ page.fileSlug }}.html"

---


The `barrier()` method of a `QuantumCircuit` object can take a number of different parameters to specifcy which qubits will receive a barrier.
By passing no parameters, a barrier is drawn across all quabits.
Other valid parameters include a list of the qubits that should receive a barrier or a Python list containing the index of the qubits for which a barrier should be applied.
