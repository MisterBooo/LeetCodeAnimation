#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0005-Longest Palindromic Substring.py 
@version:
@time: 2021/12/29 
@email:terancechen@tencent.com
@function： 
"""

from typing import List
import sys


class ASolution:

    def biggertwoBridge(self, s, i, j):
        """
            扩大边界
        :return:
        """
        while i >= 0 and j < len(s) and s[i] == s[j]:
            i -= 1
            j += 1
        return i+1, j-1

    def longestPalindrome(self, s: str) -> str:
        left = 0
        right = 0
        for i in range(len(s)):
            start, end = self.biggertwoBridge(s, i, i)
            start2, end2 = self.biggertwoBridge(s, i, i + 1)
            if end - start > right - left:
                right = end
                left = start
            if end2 - start2 > right - left:
                right = end2
                left = start2
        return left, right, right-left+1


'''
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

```
Input: "cbbd"
Output: "bb"
```
'''

if __name__ == "__main__":
    sol = ASolution()

    s = "babad"
    nums2 = [3, 4, 5, 6]
    ret = sol.longestPalindrome(s)
    print(ret)

    s = "bb"
    nums2 = [3, 4, 5, 6]
    ret = sol.longestPalindrome(s)
    print(ret)