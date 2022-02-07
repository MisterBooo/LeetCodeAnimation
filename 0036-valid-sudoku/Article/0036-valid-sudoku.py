#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0036-valid-sudoku.py 
@version:
@time: 2022/02/07 
@email:terancechen@tencent.com
@function： 
"""

from typing import Optional, List
import heapq
from collections import defaultdict


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row = len(board)
        col = len(board[0])

        rowhash = defaultdict(lambda: defaultdict(lambda: 0))
        colhash = defaultdict(lambda: defaultdict(lambda: 0))
        little3hash = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: 0)))
        for i in range(row):
            for j in range(col):
                if board[i][j] == '.':
                    continue
                index = ord(board[i][j]) - ord('0')
                rowhash[i][index] += 1
                colhash[j][index] += 1
                little3hash[int(i / 3)][int(j / 3)][index] += 1
                if rowhash[i][index] > 1 or colhash[j][index] > 1 or little3hash[int(i / 3)][int(j / 3)][index] > 1:
                    return False
        return True
        pass


if __name__ == "__main__":
    sol = Solution()

    # nums = [
    #     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    #     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    #     [".", "9", "8", ".", ".", ".", ".", "6", "."],
    #     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    #     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    #     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    #     [".", "6", ".", ".", ".", ".", "2", "8", "."],
    #     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    #     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    # ]
    #
    # isValid = sol.isValidSudoku(nums)
    # print(isValid)
    #
    # board = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    #     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    #     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    #     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    #     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    #     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    #     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    #     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    #     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

    board = [[".", ".", ".", ".", "5", ".", ".", "1", "."],
             [".", "4", ".", "3", ".", ".", ".", ".", "."],
             [".", ".", ".", ".", ".", "3", ".", ".", "1"],
             ["8", ".", ".", ".", ".", ".", ".", "2", "."],
             [".", ".", "2", ".", "7", ".", ".", ".", "."],
             [".", "1", "5", ".", ".", ".", ".", ".", "."],
             [".", ".", ".", ".", ".", "2", ".", ".", "."],
             [".", "2", ".", "9", ".", ".", ".", ".", "."],
             [".", ".", "4", ".", ".", ".", ".", ".", "."]]

    isValid = sol.isValidSudoku(board)
    print(isValid)
