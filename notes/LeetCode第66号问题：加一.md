# LeetCode 第 66 号问题：加一

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

今天分享的题目来源于 LeetCode 上第 66 号问题：加一。题目难度为 Easy，目前通过率为 39.0% 。

### 题目描述

给定一个由**整数**组成的**非空**数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1:**

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

**示例 2:**

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

**示例 3:**

```
//为了更好理解题意，根据 LeetCode 评论区评论新增一个示例
输入: [9,9]
输出: [1，0，0]
解释: 输入数组表示数字 100。
```

### 题目解析

本题很简单，题目意思也很好理解，注意的点就是 **进位问题**。

* 如果数组末位（个位）小于 9 ，直接个位加 1 返回即可

* 如果数组末位（个位）等于 9，将该位（个位）设置为 0 ，并且产生了进位，接下来观察前一位（十位）

* * 如果前一位（十位）小于 9 ，直接十位加 1 返回即可
  * 如果前一位（十位）等于 9，将该位（十位）设置为 0 ，并且产生了进位，接下来观察前一位（百位）

* 以此类推，最后观察运算完的第一位是否为 0 ，如果为 0 ，则在最前面加 1 （**示例 3**）

  

### 动画描述

![](https://raw.githubusercontent.com/MisterBooo/myBlogPic/master/20190606112155.gif)

![](https://raw.githubusercontent.com/MisterBooo/myBlogPic/master/20190606112128.gif)



### 代码实现

```java
public class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        //从数组末尾开始向前遍历
        for (int i = digits.length - 1; i >= 0; --i) {
            if (digits[i] < 9) {
                digits[i]++;
                //没有进位，直接返回
                return digits;
            }
            //产生进位，需要将该位赋值为 0 
            digits[i] = 0;
        }
        //整体产生了进位，数组长度需要变化加 1
        int[] res = new int[n + 1];
        res[0] = 1;
        return res;
    }
}
```

![](https://bucket-1257126549.cos.ap-guangzhou.myqcloud.com/blog/fz0rq.png)

