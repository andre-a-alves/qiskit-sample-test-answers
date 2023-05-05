# Qiskit _Sample Test_ Answers
![GitHub](https://img.shields.io/github/license/andre-a-alves/qiskit-sample-test-answers?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/andre-a-alves/qiskit-sample-test-answers?style=flat-square)
[![Code style: black](https://img.shields.io/badge/code%20style-black-black?style=flat-square)](https://github.com/psf/black)
[![Site generator: Eleventy](https://img.shields.io/badge/site%20generator-Eleventy-blue?style=flat-square)](https://www.11ty.dev)

This repository is intended to help people studying for the [IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X](https://www.ibm.com/training/certification/C0010300) exam by providing answer breakdowns and references to the sample test, which can be downloaded [here](https://www.ibm.com/training/certification/C0010300).

[Qiskit](https://qiskit.org/) is IBM's open-source SDk for working with quantum computers.
In 2021, IBM began offering a certification for [IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X](https://www.ibm.com/training/certification/C0010300).
This repository is intended to facilitate studying for the certification exam.

Each question breakdown contains the following information:
* The questions and potential answers
* An explanation of the question
* Links to reference materials related to the question
* The correct answer
* An explanation about why each question is correct or incorrect, including code examples

## Getting Started
There are two ways to use this resource. You can either visit the website, or you can run the [Jupyter Lab](https://jupyter.org).

### Website
The [website](https://andre-a-alves.github.io/qiskit-sample-test-answers/) is a statically-generated website (for performance) built from the Jupyter Notebooks used in this project.
It contains all the information from the notebooks, and plans exist to improve it over time.
To use the website, all you need to do it visit the link and start reading.

My future plans with the website include:
* Make question sections collapsible, so you only read the description you are interested in at any given time
* Add a dark theme

### JupyterLab
Since the website is generated from Jupyter Notebooks, you can also download and run the Jupyter Notebook files locally.
This is actually the original experience.

#### Clone the repository
To begin, download this repository onto your own system.
There are several ways to do so, but the easiest will be via the command line with the following command:
```bash
git clone git@github.com:andre-a-alves/qiskit-sample-test-answers.git
```
Next, I highly recommend setting up a virtual environment for this project.
Instructions for how to do so with `venv` are available in [the Python documentation](https://docs.python.org/3/library/venv.html).

#### Install Dependencies
Once you have set up and activated your virtual environment, navigate to the directory containing your local version of this repository.

Run the following command to install the dependencies:
* `pip install -r requirements.txt`

#### Run JupyterLab
Run the following command to open your JupyterLab:
* `jupyter-lab`

## Contributing/Feedback
While I am a Qiskit-certified developer, I am not a quantum physicist, nor do I have decades of experience making websites, so I am sure there is room for improvement!
Contributions are more than welcome.
Please take a look at the [contribution guide](CONTRIBUTING.md) if you would like to contribute.

## Conduct
As an inclusive open-source project, this project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
Please be respectful to all users and contributors.

## License
This project is licensed under the [GNU GPL v.3.0](LICENSE). 

## Disclaimer
This repository is my own work and is not endorsed by IBM or pearsonVue.
