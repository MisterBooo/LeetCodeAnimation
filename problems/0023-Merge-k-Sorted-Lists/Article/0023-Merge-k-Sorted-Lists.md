# LeetCode 第 23 号问题：合并 K 个排序链表

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 23 号问题：合并 K 个排序链表。题目难度为 Hard，目前通过率为 45.8% 。

### 题目描述

合并 *k* 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

**示例:**

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

**输入**

![图一](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/u2jnp.jpg)

**输出**

![图二](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/yc4ac.jpg)

### 题目解析

### 题目分析一

这里需要将这 *k* 个排序链表整合成一个排序链表，也就是说有多个输入，一个输出，类似于漏斗一样的概念。

因此，可以利用最小堆的概念。如果你对堆的概念不熟悉，可以戳这先了解一下~

取每个 Linked List 的最小节点放入一个 heap 中，排序成最小堆。然后取出堆顶最小的元素，放入输出的合并 List 中，然后将该节点在其对应的 List 中的下一个节点插入到 heap 中，循环上面步骤，以此类推直到全部节点都经过 heap。

由于 heap 的大小为始终为 k ，而每次插入的复杂度是 logk ，一共插入了 nk 个节点。时间复杂度为 O(nklogk)，空间复杂度为O(k)。

### 动画演示

![动画演示](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/iuxmh.gif)

### 代码实现

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        //用heap(堆)这种数据结构，也就是 java 里面的 PriorityQueue
        PriorityQueue<ListNode> pq = new PriorityQueue<>(new Comparator<ListNode>() {
            public int compare(ListNode a, ListNode b) {
                return a.val-b.val;
            }
        });
        ListNode ret = null, cur = null;
        for(ListNode node: lists) {
            if(null != node) {
                pq.add(node);    
            }
        }
        while(!pq.isEmpty()) {
            ListNode node = pq.poll();
            if(null == ret) {
                ret = cur = node;
            }
            else {
                cur = cur.next = node;
            }
            if(null != node.next) {
                pq.add(node.next);    
            }
        }
        return ret;
    }
}
```





### 题目分析二

这道题需要合并 k 个有序链表，并且最终合并出来的结果也必须是有序的。如果一开始没有头绪的话，可以先从简单的开始：**合并 两 个有序链表**。

合并两个有序链表：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

这道题目按照题目描述做下去就行：新建一个链表，比较原始两个链表中的元素值，把较小的那个链到新链表中即可。需要注意的一点时由于两个输入链表的长度可能不同，所以最终会有一个链表先完成插入所有元素，则直接另一个未完成的链表直接链入新链表的末尾。

所以代码实现很容易写：

```java
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        //新建链表
        ListNode dummyHead = new ListNode(0);
        ListNode cur = dummyHead;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                cur.next = l1;
                cur = cur.next;
                l1 = l1.next;
            } else {
                cur.next = l2;
                cur = cur.next;
                l2 = l2.next;
            }
        }
        // 注意点：当有链表为空时，直接连接另一条链表
        if (l1 == null) {
            cur.next = l2;
        } else {
            cur.next = l1;
        }
        return dummyHead.next;
    }
```



现在回到一开始的题目：合并 K 个排序链表。

**合并 K 个排序链表** 与 **合并两个有序链表** 的区别点在于操作有序链表的数量上，因此完全可以按照上面的代码思路来实现合并 K 个排序链表。

这里可以参考 **归并排序 **的分治思想，将这  K 个链表先划分为两个 K/2 个链表，处理它们的合并，然后不停的往下划分，直到划分成只有一个或两个链表的任务，开始合并。

![归并-分治](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/74ush.gif)

### 代码实现

根据上面的动画，实现代码非常简单也容易理解，先划分，直到不能划分下去，然后开始合并。

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists){
        if(lists.length == 0)
            return null;
        if(lists.length == 1)
            return lists[0];
        if(lists.length == 2){
           return mergeTwoLists(lists[0],lists[1]);
        }

        int mid = lists.length/2;
        ListNode[] l1 = new ListNode[mid];
        for(int i = 0; i < mid; i++){
            l1[i] = lists[i];
        }

        ListNode[] l2 = new ListNode[lists.length-mid];
        for(int i = mid,j=0; i < lists.length; i++,j++){
            l2[j] = lists[i];
        }

        return mergeTwoLists(mergeKLists(l1),mergeKLists(l2));

    }
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        ListNode head = null;
        if (l1.val <= l2.val){
            head = l1;
            head.next = mergeTwoLists(l1.next, l2);
        } else {
            head = l2;
            head.next = mergeTwoLists(l1, l2.next);
        }
        return head;
    }
}
```

![](../../Pictures/qrcode.jpg)