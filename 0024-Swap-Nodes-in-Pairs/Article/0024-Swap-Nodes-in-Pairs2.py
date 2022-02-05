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
        dummyHead = ListNode(0)
        dummyHead.next = head
        # 定义三个指针 temp(dummyHead), node1, node2
        temp = dummyHead

        while temp and temp.next:

            node1 = temp.next
            node2 = node1.next
            if node2:
                temp.next = node2
                node1.next = node2.next
                node2.next = node1

            temp = node1

        return dummyHead.next

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

