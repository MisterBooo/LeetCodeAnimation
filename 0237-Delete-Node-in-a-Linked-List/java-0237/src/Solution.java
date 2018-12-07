/// Source : https://leetcode.com/problems/delete-node-in-a-linked-list/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15
///
/// 时间复杂度: O(1)
/// 空间复杂度: O(1)
public class Solution {

    public void deleteNode(ListNode node) {

        if(node == null || node.next == null)
            throw new IllegalArgumentException("node should be valid and can not be the tail node.");

        node.val = node.next.val;
        node.next = node.next.next;
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4};

        ListNode head = new ListNode(arr);
        System.out.println(head);

        ListNode node2 = head.findNode(2);
        (new Solution()).deleteNode(node2);
        System.out.println(head);
    }
}
