# LeetCode 第 110 号问题：平衡二叉树

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 110 号问题：平衡二叉树。

### 题目描述

给定一个二叉树，判断它是否是高度平衡的二叉树。

### 题目解析

采取**后序遍历**的方式遍历二叉树的每一个结点。

在遍历到一个结点之前已经遍历了它的左右子树，那么只要在遍历每个结点的时候记录它的深度（某一结点的深度等于它到叶结点的路径的长度），就可以一边遍历一边判断每个结点是不是平衡的。

### 动画描述

待补充

### 代码实现

```java
class Solution {
    private boolean isBalanced = true;
    public boolean isBalanced(TreeNode root) {
        getDepth(root);
        return isBalanced;
    }
      public int getDepth(TreeNode root) {
      if (root == null)
			return 0;
		int left = getDepth(root.left);
		int right = getDepth(root.right);
		if (Math.abs(left - right) > 1) {
			isBalanced = false;
		}
		return right > left ? right + 1 : left + 1;
      }
}
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/z7w57.png)