#! /usr/bin/python

from argparse import ArgumentParser
from nbconvert import Exporter, MarkdownExporter
from nbconvert.preprocessors import Preprocessor
from nbformat import NotebookNode
from traitlets.config import Config
import nbformat
import os
import time

ELEVENTY_PATH: str = "../11ty/_src/questions"


class MdOutputPreprocessor(Preprocessor):
    def preprocess(self, nb, resources):
        processed_cells = []
        for cell in nb['cells']:
            if cell['cell_type'] == "code":
                for output in cell['outputs']:
                    if 'text' in output.keys():
                        next_cell = {
                            "cell_type": "markdown",
                            "source": f"**Output**:\n```bash\n{output['text']}\n```",
                            "id": str(hash(f"output['text']{time.time()}")),
                            "metadata": {"tags": ["test"]},
                        }
                        cell['outputs'].remove(output)
                        processed_cells.append(cell)
                        processed_cells.append(nbformat.from_dict(next_cell))
                    else:
                        processed_cells.append(cell)
            else:
                processed_cells.append(cell)
        nb['cells'] = processed_cells
        return nb, resources


def get_notebook(filename: str) -> NotebookNode:
    with open(filename, "r") as nb:
        notebook = nbformat.read(nb, as_version=4)
    return notebook


def convert_notebook(notebook: NotebookNode, exporter: Exporter) -> tuple:
    return exporter.from_notebook_node(notebook)


def embed_embedded_images_in_markdown(markdown: str) -> str:
    markdown_split = markdown.split("![png](data:image/png;base64")
    for i, substring in enumerate(markdown_split[1:]):
        markdown_split[i + 1] = substring.replace(")", "\b\" />", 1)
    return "<img src=\"data:image/png;base64".join(markdown_split)


def export_md_file(contents: str, filename: str):
    with open(f"{ELEVENTY_PATH}/{filename}", "w") as of:
        of.write(embed_embedded_images_in_markdown(contents))


def write_images(main_filename_base: str, images: dict) -> None:
    for filename, data in images.items():
        with open(f"{ELEVENTY_PATH}/{main_filename_base}/{filename}", "wb") as of:
            of.write(data)


def strip_filetype(filename: str) -> str:
    if filename[0:2] == "./":
        return filename.split("./")[1].split(".")[0].lower()
    else:
        return filename.split(".")[0].lower()


def prepend_tags(title: str, tags: list, md_text: str) -> str:
    prepend = [
        ["---", f"title: {title}", "layout: layouts/base.njk", "tags:"],
        [f"  - {tag}" for tag in tags],
        ["---", md_text]
    ]
    return "\n".join([string for sublist in prepend for string in sublist])


def titleify_basename(base: str) -> str:
    if "-0" in base:
        return base.replace("-0", " ").capitalize()
    else:
        return base.replace("-", " ").capitalize()


def create_argument_parser() -> ArgumentParser:
    parser = ArgumentParser()
    parser.add_argument('-if', '--inputs', nargs="+", help="The Notebooks to be converted")
    return parser


def main() -> int:
    conf = Config()
    conf.MarkdownExporter.preprocessors = [MdOutputPreprocessor]
    markdown_exporter = MarkdownExporter(config=conf)

    args = create_argument_parser().parse_args()
    for arg in args.inputs:
        print(f"Copying {arg}...")
        base_name: str = strip_filetype(arg)
        title: str = titleify_basename(base_name)
        saved_notebook = get_notebook(arg)
        (md_body, md_resources) = convert_notebook(saved_notebook, markdown_exporter)
        if md_resources['outputs']:
            dir_path = f"{ELEVENTY_PATH}/{base_name}"
            if not os.path.exists(dir_path):
                os.mkdir(f"{ELEVENTY_PATH}/{base_name}")
            write_images(base_name, md_resources['outputs'])
        export_md_file(prepend_tags(title, ["question", base_name], md_body), f"{base_name}.md")

    return 0


if __name__ == "__main__":
    exit(main())
