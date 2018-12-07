/// Source : https://leetcode.com/problems/remove-linked-list-elements/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15

/// Time Complexity: O(n)
/// Space Complexity: O(1)
public class Solution {

    public ListNode removeElements(ListNode head, int val) {

        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;

        ListNode cur = dummyHead;
        while(cur.next != null){
            if(cur.next.val == val ){
                ListNode delNode = cur.next;
                cur.next = delNode.next;
            }
            else
                cur = cur.next;
        }

        return dummyHead.next;
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 6, 3, 4, 5, 6};
        int val = 6;

        ListNode head = new ListNode(arr);
        System.out.println(head);

        (new Solution()).removeElements(head, val);
        System.out.println(head);
    }
}
