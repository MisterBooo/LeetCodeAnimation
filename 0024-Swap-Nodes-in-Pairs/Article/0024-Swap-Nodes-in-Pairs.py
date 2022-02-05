#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0024-Swap-Nodes-in-Pairs2.py 
@version:
@time: 2022/02/03 
@email:terancechen@tencent.com
@function： 
"""
from typing import Optional, List
import heapq


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        dummy = ListNode(0)
        p = dummy
        q = head

        if not q or not q.next:
            return head

        while p and q:
            if not q.next:
                break

            q1 = q.next.next
            p.next = q.next
            p.next.next = q
            q.next = q1

            p = q
            q = q1

        return dummy.next

    def print(self, head: Optional[ListNode]):
        while head:
            print(head.val)
            head = head.next


if __name__ == "__main__":
    sol = Solution()

    # a1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
    a1 = ListNode(1, ListNode(2, ListNode(3)))
    head = sol.swapPairs(a1)
    sol.print(head)

