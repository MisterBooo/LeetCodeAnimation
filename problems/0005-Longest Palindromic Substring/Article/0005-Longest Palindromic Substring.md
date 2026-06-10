# LeetCode 第 5 号问题：最长回文串

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com
>

题目来源于 LeetCode 上第 5 号问题：最长回文串。题目难度为 Medium，目前通过率为 29% 。

## 题目描述

给定一个字符串，要求这个字符串当中最长的回文串。

## 示例

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

```
Input: "cbbd"
Output: "bb"
```

## 题目分析

这道题目是典型的看着简单，但是实际上并不简单的问题。

我们先从简单的算法开始，最简单的方法当然是暴力。由于我们需要求出最长的回文串，一种方法是求出s串所有的子串，然后一一对比它们是否构成回文。这样当然是可行的，但是我们简单分析一下复杂度就会发现，这并不能接受。对于一个长度为n的字符串来说，我们任意选择其中两个位置，就可以找到它的一个子串，那么我们选择两个位置的数量就是$C_n^2 = \frac{n(n-1)}{2}$。对于每一个子串，我们需要遍历一遍才能判断是否回文，所以整体的复杂度是$O(n^3)$。

但是如果你对回文串非常熟悉的话，会发现其实这是可以优化的。因为我们要求的是最长的回文串，如果我们确定了对称中心的位置，它能够构成的最长回文串就是确定的。所以我们只需要遍历所有的回文串中心，和每个中心能找到的最长回文串。这样我们的复杂度就降低了一维，变成了$O(n^2)$。

回文串有两种形式，一种是奇回文，也就是回文中心是一个字符，比如aba。还有一种是偶回文，回文中心是两个字符之间，比如abba。这两种情况我们需要分开讨论。

我们写出代码：

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        
        ret = ''
        for i in range(n):
            # 奇回文的情况
            l, r = i, i
            while s[l] == s[r]:
                l -= 1
                r += 1
                if l < 0 or r >= n:
                    break
            if r - l - 1 > len(ret):
                ret = s[l+1: r]
            
            # 偶回文的情况
            l, r = i-1, i
            while l >= 0 and s[l] == s[r]:
                l -= 1
                r += 1
                if l < 0 or r >= n:
                    break
            if r - l - 1 > len(ret):
                ret = s[l+1: r]
                
        return ret
```

到这里还没有结束，接下来我们介绍一个经典的回文串求解算法——Manacher，也叫做马拉车算法。

首先，我们需要统一奇回文和偶回文这两种情况，这也很方便，我们把原串进行处理，在两个相邻字符当中插入一个分隔字符#，比如abcd转化成#a#b#c#d#。一般我们还会在首尾加入防止超界的字符，比如$&等。之后我们维护两个值，分别是id和mr。mr表示当前能够构成的回文串向右延伸最远的位置，id表示这个位置对应的对称中心。根据这个位置id以及mr我们可以快速地求解出当前位置i能够构成的合法回文串的长度。

我们假设每一个位置构成的合法回文串半径是p[i], 那么对于i这个位置，我们可以得到p[i] >= min(mr - i, p[id * 2 - i])。其中id * 2 - i是i这个位置关于id的对称位置，并且以i为中心对称的回文串小于mr位置的部分也关于id对称。所以如果p[id * 2 - i] < mr - i的话，说明i关于id的对称位置没能突破id对称的限制，既然i的对称点没有能突破限制，那么i显然也不行。同理，如果p[id * 2 - i] > mr - i的话，说明i的对称位置没有被id限制住，但是这恰恰说明i被限制住了。因为如果i也能突破mr这个限制的话，那么说明id的对称范围还能扩大，这和我们的前提假设矛盾了。所以只有p[id * 2 - i] == mr - i的情况，i才有可能继续延伸。

如果能理解上面的关系，整个算法已经很清楚了，如果没看懂也没有关系，可以看下下面的动图，会展示得更加清楚。

理解了上述的算法过程之后剩下的工作就简单了，我们只需要在求解p[i]的同时维护id和mr即可。

最后我们来看下算法的复杂度，为什么这是一个O(n)的算法呢？原因很简单，我们只需要关注mr这个变量即可。mr这个变量是递增的，mr每次递增的大小，其实就是p[i] - (mr - i)的长度。所以虽然看似我们用了两重循环，但是由于mr最多只能递增n次，所以它依然是O(n)的算法。

#### 动画描述

![](../Animation/LeetCode5.gif)

#### 代码实现

```python
class Solution:
    
    def longestPalindrome(self, s: str) -> str:
        # 在所有字符中间插入#
        def transform(s):
            return '$#' + '#'.join(list(s)) + '#&'
        
        if s == '':
            return s
        # 初始化
        s = transform(s)
        p = [0 for _ in range(len(s)+1)]
        mr, id_ = 0, 0
        # 首尾是特殊字符，所以下标从1到len(s)-2
        for i in range(1, len(s)-1):
            # 计算p[i]
            p[i] = 1 if mr <= i else min(p[2*id_-i], mr - i)

            # 只有当前i已经摆脱id限制，或者是第三种情况时，才有可能继续延伸
            # 这个只是优化，不加这个判断一样可以运行
            if mr <= i or p[2*id_-i] == mr - i:
                while s[i - p[i]] == s[i + p[i]]:
                    p[i] += 1

                if i + p[i] > mr:
                    mr, id_ = i + p[i], i
        # 找到长度最长的下标
        id_ = p.index(max(p))
        # 获得整个回文的字符串
        palindromic = s[id_ - p[id_]+1: id_ + p[id_]]
        # 过滤掉#，还原为原字符
        return ''.join(filter(lambda x: x != '#', list(palindromic)))
        
```

![](../../Pictures/qrcode.jpg)