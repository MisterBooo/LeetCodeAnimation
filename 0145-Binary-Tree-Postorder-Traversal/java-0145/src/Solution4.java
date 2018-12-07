/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-30

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// Non-Recursive
// Using two stacks, Reverse the Preorder Traversal!
//
// Time Complexity: O(n)
// Space Complexity: O(n)
public class Solution4 {

    public List<Integer> postorderTraversal(TreeNode root) {

        ArrayList<Integer> res = new ArrayList<Integer>();
        if(root == null)
            return res;

        Stack<TreeNode> stack = new Stack<>();
        Stack<Integer> output = new Stack<>();

        stack.push(root);
        while(!stack.empty()){

            TreeNode cur = stack.pop();
            output.push(cur.val);

            if(cur.left != null)
                stack.push(cur.left);
            if(cur.right != null)
                stack.push(cur.right);
        }

        while(!output.empty())
            res.add(output.pop());
        return res;
    }
}
