# LeetCode 第 6 号问题：蛇形矩阵

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com
>

题目来源于 LeetCode 上第 6 号问题：蛇形矩阵。题目难度为 Medium，目前通过率为 35.1% 。


## 题目描述

给定一个字符串，和一个整数n，将它排列成一个n行的蛇形返回。

## 示例

```
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

给定字符串和蛇形排列占据的行数，要求返回重新排列后的串

## 题目解析

这道题是一道模拟题，题目的要求就是答案，我们只需要读懂题意就很容易实现。

我们最终要输出的是以蛇形摆放之后的字符串再按行串联在一起之后的结果，也就是说每一个字母摆放的列并不重要，重要的是摆放的行号。我们可以很容易想到通过数组维护每一行当中摆放的字母，最后将每一行的结果串联即可。所以问题就只剩下了，我们如何知道每一个字母应该摆放在哪一行？

其实这也是有规律的，我们通过观察样例可以发现，我们每一个字母摆放的行号先是从0递增到n-1，再从n-1递减到0。我们就模拟这个过程，一个字符一个字符的放置即可。

比如字符串是“PAYPALISHIRING ”，rowNum=4。我们可以创建四个空串：

“”
“”
“”
“”

然后我们按照蛇形一个字母一个字母地放进这些空串当中：

当放了第一个字母p之后，变成：

“p”
“”
“”
“”

接着放第二个：

“p”
“a”
“”
“”

接着第三个：

“p”
“a”
“y”
“”

当我们把所有字母都放完了之后，可以得到这样的四个串：

“PIN”
“ALSIG”
“YAHR”
“PI”

然后把这四串拼接在一起就行了。


#### 动画描述

![](../Animation/LeetCode6.gif)

#### 代码实现

```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # 记录每一行摆放的字母
        rows = ['' for _ in range(numRows)]
        # 记录当前行号
        cur_row = 0
        # 记录当前摆放顺序是否从上往下， False代表从下往上
        forward = True
        # numRows = 1直接返回
        if numRows == 1:
            return s
        
        for i, c in enumerate(s):
            rows[cur_row] += c
            # 根据顺序变更行号
            if forward:
                cur_row += 1
            else:
                cur_row -= 1
            # 根据行号和当前顺序判断需不需要转向
            if cur_row == numRows - 1 and forward:
                forward = False
            
            if cur_row == 0 and not forward:
                forward = True
            
        ret = ''
        for sc in rows:
            ret += sc
        return ret
```

![](../../Pictures/qrcode.jpg)