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


// Morris PostOrder Traversal
//
// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {

public:
    vector<int> postorderTraversal(TreeNode* root) {

        vector<int> res;
        if(root == NULL)
            return res;

        TreeNode* dummyRoot = new TreeNode(-1);
        dummyRoot->left = root;

        TreeNode* cur = dummyRoot;
        while(cur != NULL){
            if(cur->left == NULL)
                cur = cur->right;
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
                    reverseTraversal(cur->left, res);
                    cur = cur->right;
                }
            }
        }
        delete dummyRoot;

        return res;
    }

private:
    void reverseTraversal(TreeNode* node, vector<int>& res){

        int start = res.size();
        while(node != NULL){
            res.push_back(node->val);
            node = node->right;
        }
        reverse(res.begin() + start, res.end());
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

