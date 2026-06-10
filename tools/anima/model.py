import re
from dataclasses import dataclass
from pathlib import Path


@dataclass
class ProblemInfo:
    id: int
    title: str

    def title_slug(self):
        title_parts = re.split(r'\s+', self.title)
        return f'{self.id:04d}-' + '-'.join(title_parts)


@dataclass
class Solution:
    problem: ProblemInfo
    path: Path

    @classmethod
    def create(cls, problem: ProblemInfo, path: Path):
        solution = Solution(problem, path)
        solution._create_dirs()
        return solution

    def _create_dirs(self):
        self.animation_path().mkdir()
        self.article_path().mkdir()
        self.code_path().mkdir()
        (self.animation_path() / 'Animation.m4v').touch()
        (self.animation_path() / 'Animation.gif').touch()

    def _path_to(self, s: str) -> Path:
        return self.path / s

    def animation_path(self) -> Path:
        return self.path / 'Animation'

    def article_path(self) -> Path:
        return self.path / 'Article'

    def doc_path(self) -> Path:
        return self.article_path() / (self.problem.title_slug() + '.md')

    def code_path(self) -> Path:
        return self.path / 'Code'
