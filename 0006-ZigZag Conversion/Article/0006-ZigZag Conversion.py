#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0006-ZigZag Conversion.py 
@version:
@time: 2022/01/02 
@email:terancechen@tencent.com
@function： 
"""


class Solution:

    def convert(self, s: str, numRows: int) -> str:
        # 周期
        peroid = 2*numRows - 2
        # 初始化一个2维的4×3的数组,嵌套的list
        # A=[[0]*3]*4
        # 通过循环赋初始值
        # 通过for循环对列表进行赋值，逐个初始化元素为0。这种情况不会出现出现的浅拷贝问题。
        # B = [[0 for t in range(2)] for i in range(3)]
        ret = [[] for i in range(numRows)]
        length = len(s)
        for i in range(length):
            mod = i % peroid
            if mod < numRows:
                ret[mod].append(s[i])
            else:
                # 行规则 [0,...numRows-1],[numRows-2,...1]
                ret[peroid - mod].append(s[i])
        retStr = ''
        for li in ret:
            retStr += ''.join(li)
        return retStr


if __name__ == "__main__":
    """
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    Example 2:
    
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    """
    sol = Solution()

    s = "AB"
    numRows = 2
    ret = sol.convert(s, numRows)
    print(ret)
    assert(ret=="PAHNAPLSIIGYIR")

    s = "PAYPALISHIRING"
    numRows = 4
    ret = sol.convert(s, numRows)
    print(ret)
    assert (ret == "PINALSIGYAHRPI")


