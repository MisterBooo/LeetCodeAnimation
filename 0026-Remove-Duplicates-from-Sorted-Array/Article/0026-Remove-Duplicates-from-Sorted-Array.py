#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0026-Remove-Duplicates-from-Sorted-Array.py 
@version:
@time: 2022/02/04 
@email:terancechen@tencent.com
@function： 
"""
from typing import Optional, List
import heapq


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums)-1:
            if nums[i] == nums[i + 1]:
                del nums[i]
            else:
                i = i+1
        return len(nums)


if __name__ == "__main__":
    sol = Solution()

    a1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

    len1 = sol.removeDuplicates(a1)
    print(len1)
