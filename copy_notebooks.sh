#! /usr/bin/bash

source ./.venv/bin/activate

for NOTEBOOK in ./jupyter/*.ipynb; do
	NUMBER="${NOTEBOOK//[^0-9]/}"
	jupyter nbconvert $NOTEBOOK --to markdown --output-dir ./11ty/_src/questions
done

for MARKDOWN in ./11ty/_src/questions/*.md; do
	FULL_NUMBER="${MARKDOWN//[^0-9]/}"
	NUMBER=`expr "${FULL_NUMBER: -2}" + 0`
	echo -e "---\ntitle: Question ${NUMBER}\nlayout: layouts/base.njk\n---\n$(cat $MARKDOWN)" > $MARKDOWN
done
