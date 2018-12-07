/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-31

#include <iostream>
#include <vector>
#include <stack>

using namespace std;

/// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};


// Classic Non-Recursive
// Using a pre pointer to record the last visted node
//
// Time Complexity: O(n)
// Space Complexity: O(h)
class Solution {

public:
    vector<int> postorderTraversal(TreeNode* root) {

        vector<int> res;
        if(root == NULL)
            return res;

        stack<TreeNode*> stack;
        TreeNode* pre = NULL;
        TreeNode* cur = root;

        while(cur != NULL || !stack.empty()){

            while(cur != NULL){
                stack.push(cur);
                cur = cur->left;
            }

            cur = stack.top();
            stack.pop();

            if(cur->right == NULL || pre == cur->right){
                res.push_back(cur->val);
                pre = cur;
                cur = NULL;
            }
            else{
                stack.push(cur);
                cur = cur->right;
            }
        }

        return res;
    }
};


void print_vec(const vector<int>& vec){
    for(int e: vec)
        cout << e << " ";
    cout << endl;
}

int main() {

    TreeNode* root = new TreeNode(1);
    root->right = new TreeNode(2);
    root->right->left = new TreeNode(3);
    print_vec(Solution().postorderTraversal(root));

    return 0;
}

