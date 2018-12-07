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
// Using a tag to record whether the node has been visited
//
// Time Complexity: O(n), n is the node number in the tree
// Space Complexity: O(h), h is the height of the tree
class Solution {

private:
    struct TagNode{
        TreeNode* node;
        bool isFirst;
        TagNode(TreeNode* node): node(node), isFirst(false){}
    };

public:
    vector<int> postorderTraversal(TreeNode* root) {

        vector<int> res;
        if(root == NULL)
            return res;

        stack<TagNode> stack;
        TreeNode* cur = root;
        while(cur != NULL || !stack.empty()){

            while(cur != NULL){
                stack.push(TagNode(cur));
                cur = cur->left;
            }

            TagNode tagNode = stack.top();
            stack.pop();
            cur = tagNode.node;
            if(tagNode.isFirst == false){
                tagNode.isFirst = true;
                stack.push(tagNode);
                cur = cur->right;
            }
            else{
                res.push_back(cur->val);
                cur = NULL;
            };
        }
        return res;
    }
};

int main() {

    return 0;
}

