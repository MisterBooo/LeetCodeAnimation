#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0002-Add-Two-Numbers.py 
@version:
@time: 2021/12/24 
@email:terancechen@tencent.com
@function： 
"""


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution():
    def add_two_num(self, l1: ListNode, l2: ListNode):
        res = ListNode(0)
        head = res
        carry = 0
        while l1 or l2 or carry != 0:
            Sum = carry
            if l1:
                Sum += l1.val
                l1 = l1.next
            if l2:
                Sum += l2.val
                l2 = l2.next
            if Sum < 10:
                res.val = int(Sum)
                carry = 0
            else:
                res.val = int(Sum % 10)
                carry = Sum / 10
            if carry !=0 or l1 or l2:
                res_next = ListNode(0)
                res.next = res_next
            # 移动指针
            res = res.next
        return head

    def print(self, l: ListNode):
        head = l
        while head:
            print(head.val)
            head = head.next


if __name__ == "__main__":
    '''
    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807
    '''
    a = ListNode(2)
    a.next = ListNode(4)
    a.next.next = ListNode(3)

    b = ListNode(5)
    b.next = ListNode(6)
    b.next.next = ListNode(4)

    s = Solution()
    r = s.add_two_num(a, b)
    s.print(r)
    print(r)
