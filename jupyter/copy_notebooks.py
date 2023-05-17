#! /usr/bin/python

from argparse import ArgumentParser
from nbconvert import Exporter, MarkdownExporter
from nbconvert.preprocessors import Preprocessor
from nbformat import NotebookNode
from traitlets.config import Config
import nbformat
import re
import os
import time

ELEVENTY_PATH: str = "../11ty/_src/questions"
H1_REGEX = r"#\s(.+)\n\n"
H2_REGEX = r"\n##\s(.+)"
H3_REGEX = r"\n\n###\s(.+)"


class MdOutputPreprocessor(Preprocessor):
    def preprocess(self, nb, resources):
        processed_cells = []
        for cell in nb["cells"]:
            if cell["cell_type"] == "code":
                for output in cell["outputs"]:
                    if "text" in output.keys():
                        next_cell = {
                            "cell_type": "markdown",
                            "source": f"**Output**:\n```bash\n{output['text']}\n```",
                            "id": str(hash(f"output['text']{time.time()}")),
                            "metadata": {"tags": ["test"]},
                        }
                        cell["outputs"].remove(output)
                        processed_cells.append(cell)
                        processed_cells.append(nbformat.from_dict(next_cell))
                    else:
                        processed_cells.append(cell)
            else:
                processed_cells.append(cell)
        nb["cells"] = processed_cells
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
        markdown_split[i + 1] = substring.replace(")", '\b" />', 1)
    return '<img src="data:image/png;base64'.join(markdown_split)


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


def prepend_tags(title: str, tags: list, layout: str, md_text: str, base_name: str) -> str:
    prepend = [
        ["---", f"title: {title}", f"layout: layouts/{layout}.njk", "tags:"],
        [f"  - {tag}" for tag in tags],
        [f"permalink: \"questions/{base_name}/{{{{ page.fileSlug }}}}.html\"\n", "---", md_text],
    ]
    return "\n".join([string for sublist in prepend for string in sublist])


def titleify_basename(base: str) -> str:
    if "-0" in base:
        return base.replace("-0", " ").capitalize()
    else:
        return base.replace("-", " ").capitalize()


def create_argument_parser() -> ArgumentParser:
    parser = ArgumentParser()
    parser.add_argument(
        "-if", "--inputs", nargs="+", help="The Notebooks to be converted"
    )
    return parser


def main() -> int:
    conf = Config()
    conf.MarkdownExporter.preprocessors = [MdOutputPreprocessor]
    markdown_exporter = MarkdownExporter(config=conf)

    args = create_argument_parser().parse_args()
    # args = ["Question-13.nbconvert.ipynb"]
    for arg in args.inputs:
    # for arg in args:
        print(f"Copying {arg}...")
        base_name: str = strip_filetype(arg)
        title: str = titleify_basename(base_name)
        saved_notebook = get_notebook(arg)
        (md_body, md_resources) = convert_notebook(saved_notebook, markdown_exporter)
        if md_resources["outputs"]:
            dir_path = f"{ELEVENTY_PATH}/{base_name}"
            if not os.path.exists(dir_path):
                os.mkdir(f"{ELEVENTY_PATH}/{base_name}")
            write_images(base_name, md_resources["outputs"])
        parts = re.split(H2_REGEX, md_body)
        breakdowns = re.split(H3_REGEX, parts[10])

        for i, part in enumerate(parts):
            layout = "simple"
            tags = [base_name]
            filename = f"{base_name}.md"
            match i:
                case 0:
                    tags.extend(["question"])
                    layout = "question"
                    i -= 1
                case 1:
                    title = part
                    tags.extend(["answer_options"])
                    filename = f"{base_name}-options.md"
                case 3:
                    title = part
                    tags.extend(["explanation"])
                    filename = f"{base_name}-explanation.md"
                case 5:
                    title = part
                    tags.extend(["references"])
                    filename = f"{base_name}-references.md"
                case 7:
                    title = part
                    tags.extend(["correct_answer"])
                    filename = f"{base_name}-answer.md"
                case _:
                    continue
            export_md_file(prepend_tags(title, tags, layout, parts[i + 1], base_name), filename)

        tags = [base_name, "breakdown_base"]
        title = "Answers Breakdown"
        filename = f"{base_name}-breakdown.md"
        if len(breakdowns) > 4:
            export_md_file(
                prepend_tags(
                    title=title,
                    tags=tags,
                    layout="breakdown",
                    md_text="",
                    base_name=base_name,
                ),
                filename,
            )
            for i, part in enumerate(breakdowns[3:]):
                if i % 2 == 1:
                    continue
                answer_base = part.lower().replace(" ", "-")
                tags = [base_name, "breakdown", answer_base]
                title = part
                filename = f"{base_name}-{answer_base}.md"
                export_md_file(prepend_tags(title, tags, "simple", breakdowns[i + 4], base_name), filename)
        else:
            export_md_file(
                prepend_tags(
                    title=title,
                    tags=tags,
                    layout="breakdown",
                    md_text=breakdowns[0],
                    base_name=base_name,
                ),
                filename,
            )

    return 0


if __name__ == "__main__":
    exit(main())
