# 202. 快乐数

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上 202 题，主要涉及**集合**。

## 题目

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

 

示例：

```
输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## 题目解析

我们先举一个例子

```
输入： 59
1. 5^2 + 9^2 = 106
2. 1^2 + 0^2 + 6^2 = 37
3. 3^2 + 7^2 = 58
4. 5^2 + 8^2 = 89
5. 8^2 + 9^2 = 145
6. 1^2 + 4^2 + 5^2 = 42
7. 4^2 + 2^2 = 20
8. 2^2 + 0^2 = 4
9. 4^2 = 16
10. 1^2 + 6^2 = 37
```

这个例子，我们可以看到输入59，第10步的结果和第2步一样，一直进行计算的话，会死循环，所以这个数肯定不会是快乐树。

那么会不会有结果一直无穷大的时候，理论上是不会的。

所以我们就会有两种情况，一种是计算后能得到1的，还有就是进入循环的。

    
    1. 创建Set
    2. 循环条件为当前值不为1，循环计算结果，并对每次结果进行判断
    3. 在Set里出现的，那么说明循环了，所以不会是快乐数，返回false
    4. 没在Set里出现的，那么将当前值存入Set中
    5. 循环结束，说明计算结果为1，所以return true




## 动画理解


<video id="video" controls="" preload="none" >
      <source id="mp4" src="../Animation/202.mp4"  type="video/mp4">
  </video>

## 参考代码


```javaScript
/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) { 
    let set= new Set()
    let sum = 0
    n += ''
    while (sum !== 1) {
        sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]*n[i]
        }
        n = sum + ''
        if (set.has(sum)) return false
        set.add(sum)
    }
    return true
};
```

## 复杂度分析

时间复杂度为O(logn)，空间复杂度为O(logn)


![](../../Pictures/qrcode.jpg)