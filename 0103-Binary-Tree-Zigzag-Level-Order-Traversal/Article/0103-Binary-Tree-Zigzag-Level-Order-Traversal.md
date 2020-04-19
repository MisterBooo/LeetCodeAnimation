# LeetCode 第 103 号问题：二叉树的锯齿形层次遍历

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 103 号问题：二叉树的锯齿形层次遍历。题目难度为 Medium，目前通过率为 43.8% 。

### 题目描述

给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回锯齿形层次遍历如下：

```
[
  [3],
  [20,9],
  [15,7]
]
```

### 题目解析

该问题需要用到**队列**，与之前的[二叉树的层次遍历](https://xiaozhuanlan.com/topic/8579460312)类似，不同点在于在偶数层需要翻转一下。

- 建立一个queue
- 先把根节点放进去，这时候找根节点的左右两个子节点
- 去掉根节点，此时queue里的元素就是下一层的所有节点
- 循环遍历，将结果存到一个一维向量里
- 遍历完之后再把这个一维向量存到二维向量里
- 如果该层为偶数层，则reverse翻转一下
- 以此类推，可以完成层序遍历

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/xuoqo.gif)

### 代码实现

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/7mnmj.png)



![](../../Pictures/qrcode.jpg)