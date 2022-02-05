#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0025-Reverse-Nodes-In-K-Group.py 
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

    def reverseLink(self, startNode, endNode):
        p = startNode
        q = p.next
        startNode.next = None
        while p != endNode:
            q1 = q.next
            q.next = p
            p = q
            q = q1
        return endNode, startNode

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        dummy = ListNode(0)
        dummy.next = head

        p = dummy
        end = p
        while end:
            for _ in range(k):
                if not end or not end.next:
                    return dummy.next
                end = end.next
                tail = end.next
            start, end = self.reverseLink(p.next, end)
            end.next = tail
            p.next = start
            # update
            p = end

        return dummy.next

    def print(self, head: Optional[ListNode]):
        while head:
            print(head.val)
            head = head.next


if __name__ == "__main__":
    sol = Solution()

    a1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, ListNode(6, ListNode(7)))))))

    head = sol.reverseKGroup(a1, 3)
    sol.print(head)
