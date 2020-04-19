# LeetCode 第 94 号问题：二叉树的中序遍历

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 94 号问题：二叉树的中序遍历。题目难度为 Medium，目前通过率为 35.8% 。

### 题目描述

给定一个二叉树，返回它的*中序* 遍历。

**示例:**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

### 题目解析

用**栈(Stack)**的思路来处理问题。

中序遍历的顺序为**左-根-右**，具体算法为：

- 从根节点开始，先将根节点压入栈
- 然后再将其所有左子结点压入栈，取出栈顶节点，保存节点值
- 再将当前指针移到其右子节点上，若存在右子节点，则在下次循环时又可将其所有左子结点压入栈中



### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/v17b8.gif)

### 代码实现

```
class Solution {
        public List<Integer> inorderTraversal(TreeNode root) {
            List<Integer> list = new ArrayList<>();
            Stack<TreeNode> stack = new Stack<>();
            TreeNode cur = root;
            while (cur != null || !stack.isEmpty()) {
                if (cur != null) {
                    stack.push(cur);
                    cur = cur.left;
                } else {
                    cur = stack.pop();
                    list.add(cur.val);
                    cur = cur.right;
                }
            }
            return list;
        }
}
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/4beoi.png)