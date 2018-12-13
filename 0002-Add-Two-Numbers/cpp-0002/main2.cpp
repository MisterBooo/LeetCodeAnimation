/// Source : https://leetcode.com/problems/add-two-numbers/description/
/// Author : liuyubobobo
/// Time   : 2018-08-09

#include <iostream>

using namespace std;

/// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};


/// Using l1 as the result list
/// Time Complexity: O(n)
/// Space Complexity: O(n)
class Solution {

public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        ListNode *p1 = l1, *p2 = l2;
        ListNode* pre = NULL;
        int carried = 0;

        while(p1 || p2){
            int a = p1 ? p1->val : 0;
            int b = p2 ? p2->val : 0;
            if(p1)
                p1->val = (a + b + carried) % 10;
            else{
                pre->next = new ListNode((a + b + carried) % 10);
                p1 = pre->next;
            }
            carried = (a + b + carried) / 10;

            pre = p1;
            p1 = p1->next;
            if(p2) p2 = p2->next;
        }

        pre->next = carried ? new ListNode(1) : NULL;
        return l1;
    }
};


int main() {

    return 0;
}