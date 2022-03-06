#!usr/bin/env python
# -*- coding:utf-8 _*-
"""
@author:terancechen
@file: 0042-Trap.py
@version:
@time: 2022/02/09
@email:terancechen@tencent.com
@function：
"""

from typing import Optional, List
import heapq
from collections import defaultdict


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        length = int(len(matrix))
        # mlen = length - 1

        # row = 0
        # 循环一半
        for row in range(0, int(length / 2)):
            # todo 起点和终点，需要计算
            mlen = length - 1
            start = row
            end = mlen - start
            for col in list(range(row, end)):
                # todo 移动pin 四个指针
                tmp = matrix[row][col]
                matrix[row][col] = matrix[mlen - col][row]
                matrix[mlen - col][row] = matrix[mlen - row][mlen - col]
                matrix[mlen - row][mlen - col] = matrix[col][mlen - row]
                matrix[col][mlen - row] = tmp
                sol.print(matrix)
        return matrix

    def rotate_one_circle(self, matrix: List[List[int]]):
        """
        Do not return anything, modify matrix in-place instead.
        """
        length = len(matrix)
        mlen = length - 1
        row = 0
        for col in list(range(0, mlen)):
            # todo 移动pin 四个指针
            tmp = matrix[row][col]
            matrix[row][col] = matrix[mlen - col][row]
            matrix[mlen - col][row] = matrix[mlen - row][mlen - col]
            matrix[mlen - row][mlen - col] = matrix[col][mlen - row]
            matrix[col][mlen - row] = tmp
            sol.print(matrix)
        return matrix



    def print(self, matrix):
        for i in matrix:
            print(i)
        print('')


if __name__ == "__main__":
    sol = Solution()

    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    matrix = sol.rotate(matrix)
    sol.print(matrix)

    matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    matrix = sol.rotate(matrix)
    sol.print(matrix)

    print('end')
