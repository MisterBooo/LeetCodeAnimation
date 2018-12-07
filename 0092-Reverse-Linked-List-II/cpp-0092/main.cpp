/// Source : https://leetcode.com/problems/reverse-linked-list-ii/description/
/// Author : liuyubobobo
/// Time   : 2018-10-02

#include <iostream>

using namespace std;


/// Recursive
/// Time Complexity: O(n)
/// Space Complexity: O(n)

/// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int m, int n) {

        ListNode* dummyHead = new ListNode(-1);
        dummyHead->next = head;

        ListNode* pre = dummyHead;
        for(int i = 0; i < m - 1; i ++){
            pre = pre->next
        }

        ListNode* tail = pre->next;
        ListNode* left;
        pre->next = reverse(pre->next, n - m, left);
        tail->next = left;

        ListNode* ret = dummyHead->next;
        delete dummyHead;
        return ret;
    }

private:
    ListNode* reverse(ListNode* head, int index, ListNode* &left){

        if(index == 0){
            left = head->next;
            return head;
        }

        ListNode* tail = head->next;
        ListNode* ret = reverse(head->next, index - 1, left);
        tail->next = head;
        return ret;
    }
};


int main() {

    return 0;
}
