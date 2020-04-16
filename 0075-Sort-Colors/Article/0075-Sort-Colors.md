# LeetCode 第 75 号问题：颜色分类

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 75 号问题：颜色分类。题目难度为 Medium，目前通过率为 51.8% 。

### 题目描述

给定一个包含红色、白色和蓝色，一共 *n* 个元素的数组，**原地**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

**注意:**
不能使用代码库中的排序函数来解决这道题。

**示例:**

```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```

**进阶：**

- 一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
- 你能想出一个仅使用常数空间的一趟扫描算法吗？

### 题目解析

结合三路快排 partition 思路的应用。

设定两个索引，一个从左往右滑动`zero`，一个从右往左滑动`two`。

* 遍历`nums`，当`nums[i]`的值为1时，`i++`；
* 当`nums[i]`的值为2时，`two`的值先减1，而后交换`nums[i]`与`nums[two]`，此时在观察`nums[i]`的值；
* 当`nums[i]`的值为0时，`zero++`，而后交换`nums[i]`与`nums[zero]`，`i++`;当 `i = two`时，结束循环。

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/6g5tm.gif)

### 代码实现

```
// 三路快速排序的思想
// 对整个数组只遍历了一遍
// 时间复杂度: O(n)
// 空间复杂度: O(1)
class Solution {
public:
    void sortColors(vector<int> &nums) {

        int zero = -1;          // [0...zero] == 0
        int two = nums.size();  // [two...n-1] == 2
        for(int i = 0 ; i < two ; ){
            if(nums[i] == 1){
                 i ++;
            }else if (nums[i] == 2){
                 two--;
                 swap( nums[i] , nums[two]);
            }else{ // nums[i] == 0
                 zero++;
                 swap(nums[zero] , nums[i]);
                 i++;
            }
        }
    }
};

```

![](../../Pictures/qrcode.jpg)