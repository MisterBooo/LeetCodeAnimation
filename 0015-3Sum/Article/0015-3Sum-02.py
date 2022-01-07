#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0015-3Sum.py 
@version:
@time: 2022/01/04 
@email:terancechen@tencent.com
@function： 
"""
from typing import List
import sys
import copy


class Solution:

    def findTwoSum(self, nums, left, right, i, total):
        """

        """
        res = []
        while left < right:
            cursum = nums[left] + nums[right]
            if cursum == total:
                tmp = [nums[i], nums[left], nums[right]]
                res.append(tmp)

                while left < len(nums) - 1 and nums[left] == nums[left + 1]:
                    left += 1
                left += 1
                while right > 1 and nums[right] == nums[right - 1]:
                    right -= 1
                right -= 1
            elif cursum<total:
                left += 1
            else:
                right -= 1

        return res

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
            用两数之和来解决
        """
        res = []
        # todo 先排序
        nums.sort()
        i = 0
        for i in range(len(nums)):
            if i>0 and nums[i] == nums[i - 1]:
                continue
            tmp = self.findTwoSum(nums, i + 1, len(nums) - 1, i, -nums[i])
            if not tmp:
                continue
            res.extend(tmp)
        return res


if __name__ == "__main__":
    """
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    
    满足要求的三元组集合为：
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
    """
    sol = Solution()

    # nums = [-1, 0, 1, 2, -1, -4]
    # ret = sol.threeSum(nums)
    # print(ret)
    #
    # nums = []
    # ret = sol.threeSum(nums)
    # print(ret)

    nums =[-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
    ret = sol.threeSum(nums)
    print(ret)
