/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-31

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// Non-Recursive
// Using a pre pointer to record the last visted node
//
// Time Complexity: O(n)
// Space Complexity: O(h)
public class Solution6 {

    public List<Integer> postorderTraversal(TreeNode root) {

        ArrayList<Integer> res = new ArrayList<Integer>();
        if(root == null)
            return res;

        Stack<TreeNode> stack = new Stack<>();
        TreeNode pre = null;

        stack.push(root);
        while(!stack.empty()){

            TreeNode cur = stack.pop();
            if((cur.left == null && cur.right == null) ||
                    (pre != null && pre == cur.left && cur.right == null) ||
                    (pre != null && pre == cur.right)){
                res.add(cur.val);
                pre = cur;
            }
            else{
                stack.push(cur);
                if(cur.right != null)
                    stack.push(cur.right);
                if(cur.left != null)
                    stack.push(cur.left);
            }
        }
        return res;
    }
}
