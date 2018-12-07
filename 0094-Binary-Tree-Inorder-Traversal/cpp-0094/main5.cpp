/// Source : https://leetcode.com/problems/binary-tree-inorder-traversal/
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


// InOrder Morris Traversal
// Time Complexity: O(n), n is the node number in the tree
// Space Complexity: O(1)
class Solution {

public:
    vector<int> inorderTraversal(TreeNode* root) {

        vector<int> res;
        if( root == NULL )
            return res;

        TreeNode* cur = root;
        while(cur != NULL){

            if(cur->left == NULL){
                res.push_back(cur->val);
                cur = cur->right;
            }
            else{
                TreeNode* prev = cur->left;
                while(prev->right != NULL && prev->right != cur)
                    prev = prev->right;

                if(prev->right == NULL){
                    prev->right = cur;
                    cur = cur->left;
                }
                else{
                    prev->right = NULL;
                    res.push_back(cur->val);
                    cur = cur->right;
                }
            }
        }

        return res;
    }
};

int main() {

    return 0;
}
