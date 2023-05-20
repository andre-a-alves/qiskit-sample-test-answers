---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-20
  - explanation
permalink: "questions/question-20/{{ page.fileSlug }}.html"

---


This question asks us to visualize a circuit and determine the output of the measurement.

The important concepts one needs in order to understand this question is initial state, the result of an $X$ gate, and endianness.
Endianness has to do with whether the last digit represents the largest or the smallest number.
Qiskit uses little-endianness, which means qubit 0 will be the right-most digit, and qubit 1 will be one digit to the left.
In other words, $|01\rangle$ tells us `qc[0]` is 1 and `qc[1]` is 0.
