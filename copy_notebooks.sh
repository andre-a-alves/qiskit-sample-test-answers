#! /usr/bin/bash

source ./.venv/bin/activate

#cp -r ./jupyter/images ./11ty/_src/questions/images

for NOTEBOOK in ./jupyter/*.ipynb; do
	NUMBER="${NOTEBOOK//[^0-9]/}"
	jupyter nbconvert $NOTEBOOK --to html --template basic --output-dir ./11ty/_src/questions --execute
done

for HTML in ./11ty/_src/questions/*.html; do
	FULL_NUMBER="${HTML//[^0-9]/}"
	NUMBER=`expr "${FULL_NUMBER: -2}" + 0`
	echo -e "---\ntitle: Question ${NUMBER}\nlayout: layouts/base.njk\ntags: [question]\n---\n$(cat $HTML)" > $HTML
done
