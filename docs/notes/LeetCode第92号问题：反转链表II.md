# LeetCode 第 92 号问题：反转链表 II

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 92 号问题：反转链表 II。题目难度为 Medium，目前通过率为 43.8% 。

### 题目描述

反转从位置 *m* 到 *n* 的链表。请使用一趟扫描完成反转。

**说明:**
1 ≤ *m* ≤ *n* ≤ 链表长度。

**示例:**

```
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

### 题目解析

**[Reverse Linked List](https://xiaozhuanlan.com/topic/7513064892)**的延伸题。

可以考虑取出需要反转的这一小段链表，反转完后再插入到原先的链表中。

**以本题为例：**

变换的是 2，3，4这三个点，那么我们可以先取出 2 ，用 front 指针指向 2 ，然后当取出 3 的时候，我们把 3 加到 2 的前面，把 front 指针前移到 3 ，依次类推，到 4 后停止，这样我们得到一个新链表 4 -> 3 -> 2 ,  front 指针指向4。

对于原链表来说，**有两个点的位置很重要**，需要用指针记录下来，分别是 1 和 5 ，把新链表插入的时候需要这两个点的位置。

- 用 pre 指针记录 1 的位置
- 当 4 结点被取走后，5 的位置需要记下来
- 这样我们就可以把倒置后的那一小段链表加入到原链表中



### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/rjjr0.gif)

### 代码实现

```
class Solution {
public:
    ListNode *reverseBetween(ListNode *head, int m, int n) {
        ListNode *dummy = new ListNode(-1);
        dummy->next = head;
        ListNode *cur = dummy;
        ListNode *pre, *front, *last;
        for (int i = 1; i <= m - 1; ++i) cur = cur->next;
        pre = cur;
        last = cur->next;
        for (int i = m; i <= n; ++i) {
            cur = pre->next;
            pre->next = cur->next;
            cur->next = front;
            front = cur;
        }
        cur = pre->next;
        pre->next = front;
        last->next = cur;
        return dummy->next;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/l2f8n.png)