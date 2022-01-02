#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0009-Palindrome-Number.py 
@version:
@time: 2022/01/02 
@email:terancechen@tencent.com
@function： 
"""


class Solution:

    def isPalindrome(self, x: int) -> bool:

        x = str(x)
        length = len(x)
        for i in range(0, int(length/2)):
            if x[i] != x[length-i-1]:
                return False
        return True



if __name__ == "__main__":
    """
    示例 1：
    输入：x = 121
    输出：true
    
    示例 2：
    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
    
    示例 3：
    输入：x = 10
    输出：false
    解释：从右向左读, 为 01 。因此它不是一个回文数。
    """
    sol = Solution()

    s = -121
    ret = sol.isPalindrome(s)
    print(ret)
