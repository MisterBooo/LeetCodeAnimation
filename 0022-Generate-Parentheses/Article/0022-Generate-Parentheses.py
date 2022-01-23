#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0022-Generate-Parentheses.py 
@version:
@time: 2022/01/11 
@email:terancechen@tencent.com
@function： 
"""
from typing import List
import copy

class Solution:

    def __init__(self):
        self.res = []

    def isValid(self, nums):
        count = 0
        for i in nums:
            if i == '(':
                count += 1
            else:
                count -= 1
                if count < 0:
                    return False
        return True if count==0 else False

    def allsort(self, n, nums):
        """
            全排列
        """
        if len(nums) == 2*n and self.isValid(nums):
            tmp = copy.deepcopy(nums)
            if tmp in self.res:
                return
            self.res.append(''.join(tmp))
            return
        if len(nums) > 2*n:
            return
        for i in ['(', ')']:
            nums.append(i)
            self.allsort(n, nums)
            nums.pop()

    def generateParenthesis(self, n: int) -> List[str]:

        self.allsort(n, [])

        return self.res


if __name__ == "__main__":
    """
    3
        [
        "((()))",
        "(()())",
        "(())()",
        "()(())", 
        "()()()"
        ]
    """
    sol = Solution()
    # n = 3
    # ret = sol.generateParenthesis(n)
    # print(ret)
    n = 1
    ret = sol.generateParenthesis(n)
    print(ret)