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

        stack.push(root);
        while(!stack.empty()){

            TreeNode* node = stack.top();
            stack.pop();
            output.push(node);

            if(node->left != NULL)
                stack.push(node->left);
            if(node->right != NULL)
                stack.push(node->right);
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

