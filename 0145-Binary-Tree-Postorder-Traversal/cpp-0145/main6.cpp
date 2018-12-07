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


// Non-Recursive
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

        stack.push(root);
        while(!stack.empty()){

            TreeNode* node = stack.top();
            stack.pop();
            if((node->left == NULL && node->right == NULL) ||
               (pre != NULL && pre == node->left && node->right == NULL) ||
               (pre != NULL && pre == node->right)){
                res.push_back(node->val);
                pre = node;
            }
            else{
                stack.push(node);

                if(node->right != NULL)
                    stack.push(node->right);
                if(node->left != NULL)
                    stack.push(node->left);
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

