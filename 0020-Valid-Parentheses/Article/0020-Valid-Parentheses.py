#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0020-Valid-Parentheses.py 
@version:
@time: 2022/01/07 
@email:terancechen@tencent.com
@function： 
"""


class Solution:

    def isValid(self, s: str) -> bool:
        match = {
            '{': '}',
            '(': ')',
            '[': ']',
        }
        stack = []
        for ch in s:
            if ch in ['(', '{', '[']:
                stack.append(ch)
            else:
                if not stack:
                    return False
                top = stack.pop()
                if match[top] != ch:
                    return False
        if stack:
            return False
        return True


if __name__ == "__main__":
    """
        输入: "()[]{}"
        输出: true
    """
    s = "]"
    sol = Solution()
    isval = sol.isValid(s)
    print(isval)


