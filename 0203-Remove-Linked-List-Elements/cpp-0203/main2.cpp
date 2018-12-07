/// Source : https://leetcode.com/problems/remove-linked-list-elements/description/
/// Author : liuyubobobo
/// Time   : 2018-09-17

#include <iostream>

using namespace std;

///Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};


/// Recursive
/// Time Complexity: O(n)
/// Space Complexity: O(n)
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {

        if(!head)
            return head;

        if(head->val == val){
            ListNode* node = head->next;
            delete head;
            return removeElements(node, val);
        }

        head->next = removeElements(head->next, val);
        return head;
    }
};


int main() {

    return 0;
}