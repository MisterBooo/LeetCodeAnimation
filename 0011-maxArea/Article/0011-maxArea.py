#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0011-maxArea.py 
@version:
@time: 2022/01/02 
@email:terancechen@tencent.com
@function： 
"""
from typing import List
import sys

class Solution:


    def maxArea(self, height: List[int]) -> int:

        left = 0
        right = len(height) - 1
        area = -sys.maxsize-1
        while left < right:
            lht = height[left]
            rht = height[right]
            area = max(area, min(lht, rht) * (right - left))
            if lht <= rht:
                left += 1
            else:
                right -= 1
        return area


if __name__ == "__main__":
    """
    输入：[1,8,6,2,5,4,8,3,7]
    输出：49 
    解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
    示例 2：
    
    输入：height = [1,1]
    输出：1
    示例 3：
    
    输入：height = [4,3,2,1,4]
    输出：16
    """
    sol = Solution()

    s = [1,8,6,2,5,4,8,3,7]
    ret = sol.maxArea(s)
    print(ret)

    s = [1,1]
    ret = sol.maxArea(s)
    print(ret)

    s = [4,3,2,1,4]
    ret = sol.maxArea(s)
    print(ret)