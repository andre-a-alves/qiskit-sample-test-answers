#!/usr/bin/env bash

rm ./*.nbconvert.ipynb
jupyter nbconvert --to notebook --execute Question*.ipynb
python copy_notebooks.py -if ./*.nbconvert.ipynb
rm ./*.nbconvert.ipynb