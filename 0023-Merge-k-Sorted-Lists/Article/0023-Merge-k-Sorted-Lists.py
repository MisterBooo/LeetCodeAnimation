#!usr/bin/env python  
# -*- coding:utf-8 _*-
""" 
@author:terancechen
@file: 0023-Merge-k-Sorted-Lists.py 
@version:
@time: 2022/01/19 
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
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        headq_list = []

        # heapq支持元祖
        for i, node in enumerate(lists):
            if node:
                # todo bug
                # headq_list.append((node.val, i))
                heapq.heappush(headq_list, (node.val, i))
                if lists[i]:
                    # 更新指针
                    lists[i] = lists[i].next
        # 构建结果列表
        dumpy = ListNode(0)
        head = dumpy
        while len(headq_list) > 0:
            val, i = heapq.heappop(headq_list)
            dumpy.next = ListNode(val)
            # 更新 dumpy
            dumpy = dumpy.next
            # 增加池子
            if lists[i]:
                # todo bug
                # headq_list.append((node.val, i))
                heapq.heappush(headq_list, (lists[i].val, i))
                # 更新列表
                lists[i] = lists[i].next

        return head.next

    def print(self, qlist: ListNode):
        head = qlist
        while head:
            print(head.val)
            head = head.next
        return


"""
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
"""
if __name__ == "__main__":
    sol = Solution()

    # a1 = ListNode(1, ListNode(4, ListNode(5)))
    # a2 = ListNode(1, ListNode(3, ListNode(4)))
    # a3 = ListNode(2, ListNode(6))

    a1 = ListNode(1)
    a2 = ListNode(0)

    head = sol.mergeKLists([a1, a2])
    sol.print(head)
