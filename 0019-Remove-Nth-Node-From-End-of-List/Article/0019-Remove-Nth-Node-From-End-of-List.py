#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0019-Remove-Nth-Node-From-End-of-List.py 
@version:
@time: 2022/01/07 
@email:terancechen@tencent.com
@function： 
"""


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        # todo 插入头节点-空
        pre = ListNode(0)
        pre.next = head
        #
        phead = pre
        tail = pre
        delnode = pre

        for i in range(n):
            if tail:
                tail = tail.next
        while tail:
            #  1   2   3   nil
            # pre  q      tail
            tail = tail.next
            pre = delnode
            delnode = delnode.next

        pre.next = delnode.next
        return phead.next

    def print(self, head: ListNode):
        while (head):
            print(head.val)
            head = head.next


if __name__ == "__main__":
    """
    输入：head = [1,2,3,4,5], n = 2
    输出：[1,2,3,5]
    """

    sol = Solution()

    l1 = ListNode(1)
    l2 = ListNode(2)
    l3 = ListNode(3)
    l4 = ListNode(4)
    l5 = ListNode(5)
    l1.next = l2
    l2.next = l3
    l3.next = l4
    l4.next = l5
    head = sol.removeNthFromEnd(l1, 2)
    sol.print(head)

    # todo head
    l1 = ListNode(1)
    head = sol.removeNthFromEnd(l1, 1)
    sol.print(head)
