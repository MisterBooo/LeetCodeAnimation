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

    def __init__(self):
        self.targetLi = []

    def callThree(self, nums, selectli: List[int]):

        if len(selectli) > 3:
            return
        if len(selectli) == 3:
            if sum(selectli) == 0:
                t = copy.deepcopy(selectli)
                t.sort()
                if t in self.targetLi:
                    return
                self.targetLi.append(t)
            return
        for index, num in enumerate(nums):
            # if num in selectli:
            #     # 已经选择过了
            #     continue
            nums.pop(index)
            selectli.append(num)
            self.callThree(nums, selectli)
            nums.insert(index, num)
            selectli.pop(-1)

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        递归算法
        """
        self.targetLi = []
        self.callThree(nums, [])
        return self.targetLi


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

    nums = [-7,-10,-1,3,0,-7,-9,-1,10,8,-6,4,14,-8,9,-15,0,-4,-5,9,11,3,-5,-8,2,-6,-14,7,-14,10,5,-6,7,11,4,-7,11,11,7,7,-4,-14,-12,-13,-14,4,-13,1,-15,-2,-12,11,-14,-2,10,3,-1,11,-5,1,-2,7,2,-10,-5,-8,-10,14,10,13,-2,-9,6,-7,-7,7,12,-5,-14,4,0,-11,-8,2,-6,-13,12,0,5,-15,8,-12,-1,-4,-15,2,-5,-9,-7,12,11,6,10,-6,14,-12,9,3,-10,10,-8,-2,6,-9,7,7,-7,4,-8,5,-4,8,0,3,11,0,-10,-9]
    ret = sol.threeSum(nums)
    print(ret)
