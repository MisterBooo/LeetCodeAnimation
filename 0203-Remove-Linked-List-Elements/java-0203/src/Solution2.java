public class Solution2 {

    public ListNode removeElements(ListNode head, int val) {

        if(head == null)
            return head;

        ListNode node = removeElements(head.next, val);
        head.next = node;
        return head.val == val ? node : head;
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
