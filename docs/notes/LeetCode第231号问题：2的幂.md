# LeetCode 第 231 号问题：2 的幂

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 231 号问题：2 的幂。题目难度为 Easy，目前通过率为 45.6% 。

### 题目描述

给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

**示例 1:**

```
输入: 1
输出: true
解释: 2^0 = 1
```

**示例 2:**

```
输入: 16
输出: true
解释: 2^4 = 16
```

**示例 3:**

```
输入: 218
输出: false
```

### 题目解析

首先，先来分析一下 2 的次方数的二进制写法：

![表格](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/3wdpd.jpg)

仔细观察，可以看出 2 的次方数都只有一个 1 ，剩下的都是 0 。根据这个特点，只需要每次判断最低位是否为 1 ，然后向右移位，最后统计 1 的个数即可判断是否是 2 的次方数。

代码很简单：

```c++
class Solution {
public:
    bool isPowerOfTwo(int n) {
        int cnt = 0;
        while (n > 0) {
            cnt += (n & 1);
            n >>= 1;
        }
        return cnt == 1;
    } 
};
```

该题还有一种巧妙的解法。再观察上面的表格，如果一个数是 2 的次方数的话，那么它的二进数必然是最高位为1，其它都为 0 ，那么如果此时我们减 1 的话，则最高位会降一位，其余为 0 的位现在都为变为 1，那么我们把两数相与，就会得到 0。

比如 2 的 3 次方为 8，二进制位 1000 ，那么 ` 8 - 1 = 7`，其中 7 的二进制位 0111。

### 图片描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/1w9lq.jpg)

### 代码实现

利用这个性质，只需一行代码就可以搞定。

```c++
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return (n > 0) && (!(n & (n - 1)));
    } 
};
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/guem9.png)
