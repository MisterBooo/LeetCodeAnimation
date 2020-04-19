# 面试题53 - I. 在排序数组中查找数字 I

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上 面试题53 - I. 在排序数组中查找数字 I. 是算法入门的一道题。

## 题目

统计一个数字在排序数组中出现的次数。
 

示例 1:

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```

示例 2:


```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```
 

限制：

```
0 <= 数组长度 <= 50000
```
## 题目解析

题目很好理解，就是要找到给定的target在排序数组中出现的次数，刚接触到算法的萌新，不仔细审题的话，会忽略排序这个重要的点。然后直接暴力循环数组，定义一个计数变量count，每次出现目标值，count加一，遍历结束，return count。

老司机一看到这个题，“排序”，因为数组是排序的，所以所以目标都会连在一起，我们只要找到目标值左右边界，然后相减加一就可以得到出现的次数。
    
要找到左右边界，其实可以理解为在数组中找到某个值，那么就会想到最常见的一个算法，二分法。

    1. 定义两个指针：start，end分别指向数组的头和尾部
    2. 定义mid等于Math.ceil((start+end)/2)
    3. 判断mid指向的数组的元素和目标值target的大小
    4. mid大，那么移动end，否则移动start
    5. 重复以上的操作两遍，分别得到左边界left，右边界right
    6. 最后得到目标值出现次数 right - left + 1


## 动画理解


<video id="video" controls="" preload="none" >
      <source id="mp4" src="../Animation/Interview053-I- Find-Number-In-Sort-Array-I.mp4"  type="video/mp4">
  </video>

## 参考代码


```javaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let mid = 0;
    let end =  nums.length - 1;
    let left = 0;
    let right = 0;
  	// 查找右边界
    while(start <= end) {
        mid = Math.ceil((start + end) / 2)
        if (nums[mid] <= target) {
            start = mid + 1
        } else {
            end = mid -1
        }
    }
    right = start - 1; // 右边界
  	// 查找左边界
    start = 0;
    mid = 0; 
    end =  nums.length - 1;
    while(start <= end) {
        mid = Math.ceil((start + end) / 2)
        if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid -1
        }
    }
    left = end + 1
    return right - left + 1
};
```

## 复杂度分析

二分查找的时间复杂度计算如下：假设一个数组长度为n,每次查找后数据长度减半，第一次查找后数据长度为n/2,第二次查找后数据长度为n/(2的2次方)，第k次查找后数据长度为n/(2的k次方)，最坏情况下数数据长度为1时找到该数，即n/(2的k次方)=1, 解得k=log2(N).

时间复杂度为:O(log2n)。

![](../../Pictures/qrcode.jpg)