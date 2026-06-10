import os
from pathlib import Path


def get_project_path() -> Path:
    script_path = os.path.realpath(__file__)
    repo_path = Path(script_path).parent.parent
    problems_path = repo_path / 'problems'
    problems_path.mkdir(exist_ok=True)
    return problems_path


def get_md_template_path() -> Path:
    script_path = os.path.realpath(__file__)
    repo_path = Path(script_path).parent.parent
    return repo_path / 'template' / 'template.md'
