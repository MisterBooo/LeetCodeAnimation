# 387. 字符串中的第一个唯一字符

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上 387题，主要涉及哈希表。

## 题目

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

注意事项：您可以假定该字符串只包含小写字母。

## 题目解析

这道题不管怎么样都是要遍历一遍字符串才能保证字符是唯一，所以我们的算法如下

1. 遍历的时候把每个字符出现的次数用Map记录一下，如果这个字符是第一次出现，那么赋值为[i],如果它已经在Map里有了，那么我们给这个字符的值赋为false。
2. 再次遍历Map，找到值不为false的第一个字符，然后将它的值输出来
3. 如果值全部为false，然后返回-1


## 动画理解


<video id="video" controls="" preload="none" >
      <source id="mp4" src="../Animation/387.mp4"  type="video/mp4">
  </video>

## 参考代码


```javaScript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length;i++) {
        if(map.has(s[i])) {
            map.set(s[i], false)
        }else {
            map.set(s[i], [i])
        }
    }
    for(let item of map){
        if (item[1]) {
            return item[1][0]
        }
　　  }
   return -1
};
```

## 复杂度分析

哈希表的时间复杂度是O(n)


![](../../Pictures/qrcode.jpg)