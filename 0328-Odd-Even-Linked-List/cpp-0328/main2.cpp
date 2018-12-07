/// Source : https://leetcode.com/problems/odd-even-linked-list/description/
/// Author : liuyubobobo
/// Time   : 2018-10-01

#include <iostream>

using namespace std;


/// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};


/// Split the Linked List into two and then merge
/// Keep one in original Linked List
///
/// Time Complexity: O(n)
/// Space Complexity: O(1)
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {

        if(head == NULL || head->next == NULL || head->next->next == NULL)
            return head;

        ListNode* dummyHead2 = new ListNode(-1);
        ListNode* p2 = dummyHead2;
        ListNode* p = head;
        while(p->next){
            p2->next = p->next;
            if(p->next->next == NULL){
                p->next = NULL;
                break;
            }
            p->next = p->next->next;
            p = p->next;
            p2 = p2->next;
            p2->next = NULL;
        }

        p->next = dummyHead2->next;
        delete dummyHead2;
        return head;
    }
};


int main() {

    return 0;
}