#!/usr/bin/env python3

import re
from dataclasses import dataclass
from pathlib import Path

import fire

project_dir = Path('.')


@dataclass
class ProblemInfo:
    id: int
    title: str

    def title_slug(self):
        title_parts = re.split(r'\s+', self.title)
        return f'{self.id:04d}-' + '-'.join(title_parts)


@dataclass
class Article:
    problem: ProblemInfo
    path: Path

    @classmethod
    def create(cls, problem: ProblemInfo, path: Path):
        article = Article(problem, path)
        article._create_dirs()
        article._create_doc()
        return article

    def _create_dirs(self):
        for d in ('Animation', 'Article', 'Code'):
            (self.path / d).mkdir()

    def _create_doc(self):
        doc_file = self.path / 'Article' / (self.problem.title_slug() + '.md')
        with doc_file.open('w') as f:
            pass


def create_article_r(directory: Path, paths) -> None:
    if isinstance(paths, str):
        (directory / paths).mkdir()
    elif isinstance(paths, list):
        for path in paths:
            create_article_r(directory, path)


def create_article(problem_id: int, problem_title: str) -> None:
    problem = ProblemInfo(problem_id, problem_title)
    article_dir = project_dir / problem.title_slug()

    if article_dir.exists():
        print(f'创建失败，文件夹 {article_dir} 已存在')
        exit(1)
    article_dir.mkdir()

    article = Article.create(problem, article_dir)
    print(f'题解框架创建完毕，位于文件夹 {article_dir}')


class Anima:
    """
    LeetCode Animation Manager
    """

    def new(self, id: str, title: str):
        create_article(id, title)


if __name__ == '__main__':
    anima = Anima()
    fire.Fire(anima)
