# 使用快慢指针求解「环形链表」so easy！

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

今天分享的题目来源于 LeetCode 上第 141 号问题：环形链表。题目难度为 Easy，目前通过率为 40.4% 。

使用快慢指针的方式去求解 **so easy** ！

### 题目描述

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**示例 1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/vweoq.png)

**示例 2：**

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/kxbrz.png)

**示例 3：**

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/w3vsg.png)

**进阶：**

你能用 O(1)（即，常量）内存解决此问题吗？

### 题目解析

这道题是快慢指针的**经典应用**。

设置两个指针，一个每次走一步的**慢指针**和一个每次走两步的**快指针**。

* 如果不含有环，跑得快的那个指针最终会遇到 null，说明链表不含环
* 如果含有环，快指针会超慢指针一圈，和慢指针相遇，说明链表含有环。

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/mj4qo.gif)

### 代码实现

```java
//author:程序员小吴
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}
```

