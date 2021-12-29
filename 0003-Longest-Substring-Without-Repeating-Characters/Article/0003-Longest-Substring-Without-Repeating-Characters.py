#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0003-Longest-Substring-Without-Repeating-Characters.py 
@version:
@time: 2021/12/26 
@email:terancechen@tencent.com
@function： 
"""

'''
print( c + " 的ASCII 码为", ord(c))
print( a , " 对应的字符为", chr(a))
'''


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        r = 0
        res = 0
        freq = [0]*256
        while r < len(s):
            if freq[ord(s[r])] == 0:
                # 不存在，扩大右边界
                freq[ord(s[r])] += 1
                r += 1
            else:
                # 存在，移动左边界
                freq[ord(s[l])] -=1
                l += 1

            res = max(res, r - l)
        return res


if __name__ == "__main__":
    '''
    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    '''
    sol = Solution()
    len = sol.lengthOfLongestSubstring('abcabcbb')
    print(len)



