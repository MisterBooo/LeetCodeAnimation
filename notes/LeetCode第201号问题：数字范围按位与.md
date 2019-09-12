# LeetCode 第 201 号问题：数字范围按位与

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第  号问题：。题目难度为 Medium，目前通过率为 39.1% 。

### 题目描述

给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。

**示例 1:** 

```
输入: [5,7]
输出: 4
```

**示例 2:**

```
输入: [0,1]
输出: 0
```

### 题目解析

以 [ 26 ，30] 为例。

首先，将 [ 26 , 30 ] 的范围数字用二进制表示出来：

**11**010　　**11**011　　**11**100　　**11**101　　**11**110

而输出 24 的二进制是 11000 。

可以发现，只要找到二进制的 **左边公共部分** 即可。

所以，可以先建立一个 32 位都是 1 的 mask，然后每次向左移一位，比较 m 和 n 是否相同，不同再继续左移一位，直至相同，然后把 m 和 mask 相与就是最终结果。

### 动画描述

暂无

### 代码实现

```c++
class Solution {
public:
    int rangeBitwiseAnd(int m, int n) {
        unsigned int d = INT_MAX;
        while ((m & d) != (n & d)) {
            d <<= 1;
        }
        return m & d;
    }
};
```



![](https://bucket-1257126549.cos.ap-guangzhou.myqcloud.com/blog/fz0rq.png)