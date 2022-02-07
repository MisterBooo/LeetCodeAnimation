#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0035-search-insert-position.py 
@version:
@time: 2022/02/07 
@email:terancechen@tencent.com
@function： 
"""
from typing import Optional, List
import heapq


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = int(left + (right - left) / 2)
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] == target:
                return mid
            else:
                left = mid + 1
        if nums[left] < target:
            return left + 1
        elif nums[left] >= target:
            return left
        pass


if __name__ == "__main__":
    sol = Solution()

    # nums = [1, 3, 5, 6]
    # target = 2
    nums = [1]
    target = 1
    index = sol.searchInsert(nums, target)
    print(index)
