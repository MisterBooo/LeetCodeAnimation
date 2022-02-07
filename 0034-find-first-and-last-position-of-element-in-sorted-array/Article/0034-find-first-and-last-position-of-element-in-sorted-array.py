#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0034-find-first-and-last-position-of-element-in-sorted-array.py 
@version:
@time: 2022/02/05 
@email:terancechen@tencent.com
@function： 
"""
from typing import Optional, List
import heapq


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        res = [-1, -1]
        if len(nums) < 1:
            return res
        left = 0
        right = len(nums) - 1

        left = self.getFirstPos(nums, target, left, right)
        if left == -1:
            return res

        right = self.getLastPos(nums, target, left, right)
        if right == -1:
            return res
        return [left, right]

    def getFirstPos(self, nums, target, left, right):
        """

        """
        while left < right:
            mid = int(left + (right - left) / 2)
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] == target:
                right = mid
            else:
                left = mid + 1

        # if left > right and nums[left] == target:
        #     return left
        #
        # if nums[left] == target and left == right:
        #     return left
        if nums[left] == target:
            return left
        return -1

    def getLastPos(self, nums, target, left, right):
        """

        """
        while left < right:
            mid = int(left + (right - left + 1) / 2)
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] == target:
                left = mid
            else:
                left = mid + 1
        # if left > right and nums[right] == target:
        #     return right
        # if nums[right] == target and left == right:
        #     return right
        # if nums[left - 1] == target and left == right:
        #     return left - 1
        if nums[left] == target:
            return left
        return -1


if __name__ == "__main__":
    sol = Solution()

    nums = [5, 7, 7, 8, 8, 10]
    target = 8

    # nums = [5, 7, 7, 8, 8, 10]
    # target = 6

    # nums = []
    # target = 0

    # nums = [1]
    # target = 1

    # nums = [2, 2]
    # target = 2

    # nums = [1, 2, 3]
    # target = 2

    left, right = sol.searchRange(nums, target)
    print(left, right)
