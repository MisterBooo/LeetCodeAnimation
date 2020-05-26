# 530. 二叉搜索树的最小绝对差

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上 530. 二叉搜索树的最小绝对差. 是关于树的一道题。

## 题目

给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 
示例：

```
输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
```

提示：

树中至少有 2 个节点。
本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同



## 题目解析

计算树中任意两节点的差的绝对值的最小值，那么肯定是要遍历树，然后相邻节点求差对比是不是最小的。
二叉树的遍历有三种，前序遍历，中序遍历，后序遍历。

题目中给的是二叉搜索树，二叉搜索树有一个特色，就是中序遍历出来的结果，值是按照从小到大排列的。

所以我们只要中序遍历，保存上一个节点，然后遍历的时候取得当前节点和上一个节点的值的绝对值，如果比当前最小差还要小，那么更新最小差。

中序遍历是遍历左子树，然后根节点，最后是右子树，我们用递归去实现。

## 动画理解


<video id="video" controls="" preload="none" >
      <source id="mp4" src="../Animation/0530.m4v"  type="video/mp4">
  </video>

## 参考代码


```javaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Number.MAX_VALUE
    let preNode = null
    var travelTree = function (node) {
        if (node) {
            travelTree(node.left)
            if(preNode) {
                min = Math.min(min, Math.abs(preNode.val - node.val))
            }
            preNode = node
            travelTree(node.right)
        }
    }
    travelTree(root)
    return min
};
```

## 复杂度分析

时间复杂度：O(N)，N为树中节点个数。

空间复杂度：O(log(N))。

![](../../Pictures/qrcode.jpg)