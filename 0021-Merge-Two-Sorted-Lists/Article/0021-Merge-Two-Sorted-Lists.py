#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0021-Merge-Two-Sorted-Lists.py 
@version:
@time: 2022/01/09 
@email:terancechen@tencent.com
@function： 
"""
from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        if not list1:
            return list2
        elif not list2:
            return list1
        mhead= ListNode(0)
        phead = mhead
        headi = list1
        headj = list2
        while headi and headj:
            iv = headi.val
            jv = headj.val
            if iv <= jv:
                mhead.next = ListNode(iv)
                headi = headi.next
            else:
                mhead.next = ListNode(jv)
                headj = headj.next
            mhead = mhead.next

        while headi:
            iv = headi.val
            mhead.next = ListNode(iv)
            headi = headi.next
        while headj:
            jv = headj.val
            mhead.next = ListNode(jv)
            headj = headj.next
        return phead.next

    def print(self, head: Optional[ListNode]):
        while head:
            print(head.val)
            head = head.next

if __name__ == "__main__":
    """
        输入：l1 = [1,2,4], l2 = [1,3,4]
        输出：[1,1,2,3,4,4]
        
        [1]
        []

    """
    sol = Solution()

    # l1 = ListNode(1, ListNode(2, ListNode(4)))
    # l2 = ListNode(1, ListNode(3, ListNode(4)))
    # ml = sol.mergeTwoLists(l1, l2)
    # sol.print(ml)

    # l1 = ListNode(1)
    # l2 = None
    # ml = sol.mergeTwoLists(l1, l2)
    # sol.print(ml)

    l1 = ListNode(2)
    l2 = ListNode(1)
    ml = sol.mergeTwoLists(l1, l2)
    sol.print(ml)
