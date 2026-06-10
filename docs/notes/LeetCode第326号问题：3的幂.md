# LeetCode 第 326 号问题：3 的幂

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 326 号问题：3 的幂。题目难度为 Easy，目前通过率为 43.5% 。

### 题目描述

给定一个整数，写一个函数来判断它是否是 3 的幂次方。

**示例 1:**

```
输入: 27
输出: true
```

**示例 2:**

```
输入: 0
输出: false
```

**进阶：**
你能不使用循环或者递归来完成本题吗？

### 题目解析

正常的思路是不停地去除以 3，看最后的迭代商是否为 1。这种思路的代码使用到了循环，逼格不够高。

这里取巧的方法 **用到了数论的知识：3 的幂次的质因子只有 3**。

题目要求输入的是 int 类型，正数范围是 0 - 2<sup>31</sup>，在此范围中允许的最大的 3 的次方数为 3<sup>19 </sup>= 1162261467 ，那么只要看这个数能否被 n 整除即可。

### 动画描述

待补充

### 代码实现



```java
class Solution {
    public boolean isPowerOfThree(int n) {
         return n > 0 && 1162261467 % n == 0;
    }
}
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/fzqbe.png)