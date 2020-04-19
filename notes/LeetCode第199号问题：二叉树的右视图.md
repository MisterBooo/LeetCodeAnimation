# LeetCode 第 199 号问题：二叉树的右视图

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 199 号问题：二叉树的右视图。题目难度为 Medium，目前通过率为 57.5% 。

### 题目描述

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例:**

```
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

### 题目解析

与之前[二叉树的层次遍历](https://xiaozhuanlan.com/topic/8579460312)类似的，该问题需要用到**队列**,

- 建立一个 queue
- 遍历每层的节点时，把下一层的节点都存入到 queue 中
- 每当开始新一层节点的遍历之前，先把新一层最后一个节点值存到结果中



### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/i2nzo.gif)

### 代码实现

```
class Solution {
public:
    vector<int> rightSideView(TreeNode *root) {
        vector<int> res;
        if (!root) return res;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            res.push_back(q.back()->val);
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                TreeNode *node = q.front();
                q.pop();
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
        }
        return res;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/afv89.gif)