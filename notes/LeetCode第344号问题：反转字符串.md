# LeetCode 第 344 号问题：反转字符串

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 第 344 号问题：反转字符串。面试官最喜欢让你手写的一道算法题！

### 题目描述

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `char[]` 的形式给出。

不要给另外的数组分配额外的空间，你必须**原地修改输入数组**、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符。

**示例 1：**

```
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

**示例 2：**

```
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

### 

### 题目解析

这道题没什么难度，直接从两头往中间走，同时交换两边的字符。注意需要白板编程写出来即可，也注意千万别回答一句使用 reverse() 这种高级函数来解决。。。

### 动画描述

![](<https://bucket-1257126549.cos.ap-guangzhou.myqcloud.com/blog/ariy2.gif>)

### 代码实现

```
class Solution {
public:
    string reverseString(string s) {
        int i = 0, j = s.size() - 1;
        while (i < j){
            swap(s[i],s[j]);
            i++;
            j--;
        }
        return s;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/bksj7.png)