/// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

#include <iostream>
#include <vector>
#include <queue>
#include <cassert>

using namespace std;

/// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

/// BFS
/// Time Complexity: O(n), where n is the number of nodes in the tree
/// Space Complexity: O(n)
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {

        vector<vector<int>> res;
        if(root == NULL)
            return res;

        queue<pair<TreeNode*,int>> q;
        q.push(make_pair(root, 0));

        while(!q.empty()){

            TreeNode* node = q.front().first;
            int level = q.front().second;
            q.pop();

            if(level == res.size())
                res.push_back(vector<int>());
            assert( level < res.size() );

            res[level].push_back(node->val);
            if(node->left)
                q.push(make_pair(node->left, level + 1 ));
            if(node->right)
                q.push(make_pair(node->right, level + 1 ));
        }

        return res;
    }
};


int main() {

    return 0;
}