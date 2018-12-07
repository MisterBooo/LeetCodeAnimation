/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-30

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


// Non-Recursive
// Using two stacks, Reverse the Preorder Traversal!
//
// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution {

public:
    vector<int> postorderTraversal(TreeNode* root) {

        vector<int> res;
        if(root == NULL)
            return res;

        stack<TreeNode*> stack, output;

        TreeNode* p = root;
        while(p != NULL || !stack.empty()){
            if(p != NULL){
                stack.push(p);
                output.push(p);
                p = p->right;
            }
            else{
                p = stack.top();
                stack.pop();
                p = p->left;
            }
        }

        while(!output.empty()){
            res.push_back((output.top())->val);
            output.pop();
        }

        return res;
    }
};

int main() {

    return 0;
}

