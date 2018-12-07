/// Source : https://leetcode.com/problems/binary-tree-preorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

#include <iostream>
#include <vector>

using namespace std;


/// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// Recursive
// Time Complexity: O(n), n is the node number in the tree
// Space Complexity: O(h), h is the height of the tree
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {

        vector<int> res;
        preorderTraversal(root, res);
        return res;
    }

private:
    void preorderTraversal(TreeNode* node, vector<int> &res){

        if(node){
            res.push_back(node->val);
            preorderTraversal(node->left, res);
            preorderTraversal(node->right, res);
        }
    }
};

int main() {

    return 0;
}
