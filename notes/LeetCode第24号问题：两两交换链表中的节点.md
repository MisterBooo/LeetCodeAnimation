# LeetCode 第 24 号问题：两两交换链表中的节点

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 24 号问题：两两交换链表中的节点。题目难度为 Medium，目前通过率为 45.8% 。

### 题目描述

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

**示例:**

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

### 题目解析

该题属于基本的链表操作题。

- 设置一个虚拟头结点`dummyHead `
- 设置需要交换的两个节点分别为`node1 `、`node2`，同时设置`node2`的下一个节点`next`

##### 在这一轮操作中

- 将`node2`节点的next设置为`node1`节点
- 将`node1`节点的next设置为`next `节点
- 将`dummyHead `节点的next设置为`node2 `
- 结束本轮操作

接下来的每轮操作都按照上述进行。

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/6kpyu.gif)

### 代码实现

```
// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/description/
// 时间复杂度: O(n)
// 空间复杂度: O(1)
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {

        ListNode* dummyHead = new ListNode(0);
        dummyHead->next = head;

        ListNode* p = dummyHead;
        while(p->next && p->next->next){
            ListNode* node1 = p->next;
            ListNode* node2 = node1->next;
            ListNode* next = node2->next;
            node2->next = node1;
            node1->next = next;
            p->next = node2;
            p = node1;
        }

        ListNode* retHead = dummyHead->next;
        delete dummyHead;

        return retHead;
    }
};

```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/k8lty.png)