#!usr/bin/env python
# -*- coding:utf-8 _*-
"""
@author:terancechen
@file: 0004-median-of-two-sorted-arrays.py
@version:
@time: 2021/12/27
@email:terancechen@tencent.com
@function：
"""
from typing import List
import sys


class Solution:

    def findMedianSortedArrays(self, nums1, nums2: List[int]) -> int:
        # 先保证nums1最短
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        # 获取中位数长度
        mlen = int((len(nums1) + len(nums2) + 1) / 2)
        start = 0
        end = len(nums1)

        """
        这里面有两个细节：
        第1：start 属于范围 [0, len(nums1)]， 当等于len(nums1)越界处理 
        第2：start : start + (end - start + 1)/2 防止死循环，同时配合 start = mid，mid不用在加1处理
        """

        while start < end:
            # x-1 是第一行的左侧, x是右侧第一个
            x = int(start + (end - start + 1)/2)
            # y-1 是第二行的左侧，y是右侧第一个
            y = mlen - x

            if nums1[x - 1] > nums2[y]:
                # 第一行的左侧大
                # 大小界 保护边界
                end = x - 1
            # elif nums2[y - 1] > nums1[x]:
            else:
                # 第二行的左侧大
                # 大小界 保护边界
                start = x
        x = start
        y = mlen - start

        num1LeftMax = -sys.maxsize-1 if x == 0 else nums1[x-1]
        num1RightMin = sys.maxsize if x == len(nums1) else nums1[x]

        num2LeftMax = -sys.maxsize - 1 if y == 0 else nums2[y-1]
        num2RightMin = sys.maxsize if y == len(nums2) else nums2[y]

        # 奇数 满足条件
        if (len(nums1) + len(nums2)) % 2 == 1:
            # 奇数
            return max(num1LeftMax, num2LeftMax)
        else:
            # 偶数
            return (max(num1LeftMax, num2LeftMax) + min(num1RightMin, num2RightMin) )/ 2



'''
示例1：
nums1 = [1]
nums2 = [2]

则中位数是 2.0

示例2：
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
'''

if __name__ == "__main__":
    sol = Solution()

    nums1 = [1]
    nums2 = [2]
    ret = sol.findMedianSortedArrays(nums1, nums2)
    print(nums1, nums2, ret)

    nums1 = [1, 3]
    nums2 = [2, 4]
    ret = sol.findMedianSortedArrays(nums1, nums2)
    print(nums1, nums2, ret)

    nums1 = [1, 2]
    nums2 = [3, 4]
    ret = sol.findMedianSortedArrays(nums1, nums2)
    print(nums1, nums2, ret)

    nums1 = [1, 2, 3, 4]
    nums2 = [5, 6]
    ret = sol.findMedianSortedArrays(nums1, nums2)
    print(nums1, nums2, ret)

    nums1 = [1, 2]
    nums2 = [3, 4, 5, 6]
    ret = sol.findMedianSortedArrays(nums1, nums2)
    print(nums1, nums2, ret)
