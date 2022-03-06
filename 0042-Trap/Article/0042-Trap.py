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
    def trap(self, height: List[int]) -> int:
        length = len(height)
        ret = 0
        for idx in range(1, length):
            num = height[idx]
            tmp = min(max(height[0:idx+1]), max(height[idx: length])) - num
            ret += tmp
            print(idx, tmp, max(height[0:idx+1]), max(height[idx: length]))
        return ret


if __name__ == "__main__":
    sol = Solution()

    height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    ret = sol.trap(height)
    print(ret)
