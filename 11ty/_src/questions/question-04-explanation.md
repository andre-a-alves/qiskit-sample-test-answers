---
title: Question Explanation
layout: layouts/simple.njk
tags:
  - question-04
  - explanation
permalink: "questions/question-04/{{ page.fileSlug }}.html"

---


This question requires knowledge of both the `QuantumCircuit.measure()` method and the `QuantumCircuit.measure_all()` method.
The `measure()` method receives two parameters: an integer or a list with the integers of qubits to be measured, and an integer or a list of integers with the classical bits to receive the measurements.
The `measure_all()` method will measure every qubit, but it will create a new classical bit for each measurement unless passed the parameter `add_bits=False`.
