import shutil

from anima.base import get_project_path, get_md_template_path
from anima.model import ProblemInfo, Solution


def create_solution(problem_id: int, problem_title: str) -> None:
    problem = ProblemInfo(problem_id, problem_title)
    solution_dir = get_project_path() / problem.title_slug()

    if solution_dir.exists():
        print(f'创建失败，文件夹 {solution_dir} 已存在')
        exit(1)
    solution_dir.mkdir()

    solution = Solution.create(problem, solution_dir)

    template = get_md_template_path()
    shutil.copy(template, solution.doc_path())

    print(f'题解框架创建完毕，位于文件夹 {solution.path}')

