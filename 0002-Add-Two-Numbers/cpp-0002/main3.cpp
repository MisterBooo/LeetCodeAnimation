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


/// Using the longest list in l1 and l2 as the result list
/// Time Complexity: O(n)
/// Space Complexity: O(1)
class Solution {

public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {

        int len1 = getLen(l1), len2 = getLen(l2);
        ListNode *p1 = len1 > len2 ? l1 : l2;
        ListNode *p2 = len1 > len2 ? l2 : l1;

        ListNode* pre = NULL;
        int carried = 0;
        while(p1){
            int a = p1->val;
            int b = p2 ? p2->val : 0;
            p1->val = (a + b + carried) % 10;
            carried = (a + b + carried) / 10;

            pre = p1;
            p1 = p1->next;
            p2 = p2 ? p2->next : NULL;
        }

        pre->next = carried ? new ListNode(1) : NULL;
        return len1 > len2 ? l1 : l2;
    }

private:
    int getLen(ListNode* l){
        int res = 0;
        while(l)
            res ++, l = l -> next;
        return res;
    }
};


int main() {

    return 0;
}