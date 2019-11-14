# LeetCode 第 86 号问题：分割链表

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 86 号问题：分割链表。题目难度为 Easy，目前通过率为 47.8% 。

### 题目描述

给定一个链表和一个特定值 *x*，对链表进行分隔，使得所有小于 *x* 的节点都在大于或等于 *x* 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

**示例:**

```
输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
```

### 题目解析

这道题要求我们划分链表，把所有小于给定值的节点都移到前面，大于该值的节点顺序不变，相当于一个局部排序的问题。

- 设定两个虚拟节点，`dummyHead1 `用来保存小于于该值的链表，`dummyHead2 `来保存大于等于该值的链表
- 遍历整个原始链表，将小于该值的放于`dummyHead1 `中，其余的放置在`dummyHead2 `中
- 遍历结束后，将`dummyHead2 `插入到`dummyHead1 `后面

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/t96zg.gif)

### 代码实现

```
class Solution {
public:
    ListNode* partition(ListNode* head, int x) {

        ListNode* dummyHead1 = new ListNode(-1);
        ListNode* dummyHead2 = new ListNode(-1);
        ListNode* prev1 = dummyHead1;
        ListNode* prev2 = dummyHead2;

        for(ListNode* cur = head ; cur != NULL ;){
            if(cur->val < x){
                prev1->next = cur;
                cur = cur->next;
                prev1 = prev1->next;
                prev1->next = NULL;
            }
            else{
                prev2->next = cur;
                cur = cur->next;
                prev2 = prev2->next;
                prev2->next = NULL;
            }
        }

        prev1->next = dummyHead2->next;
        ListNode* ret = dummyHead1->next;

        delete dummyHead1;
        delete dummyHead2;
        return ret;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/5a3tl.png)