from anima.create import create_solution


class Anima:
    """
    LeetCode Animation Manager
    """

    def new(self, id: str, title: str):
        create_solution(id, title)
