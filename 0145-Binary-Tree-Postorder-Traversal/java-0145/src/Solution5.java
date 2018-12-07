/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-30

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import java.util.LinkedList;

// Non-Recursive
// Using two stacks, Reverse the Preorder Traversal!
//
// Time Complexity: O(n)
// Space Complexity: O(n)
public class Solution5 {

    public List<Integer> postorderTraversal(TreeNode root){

        Stack<TreeNode> stack = new Stack<>();
        LinkedList<TreeNode> output = new LinkedList<>();

        TreeNode p = root;
        while(p != null || !stack.isEmpty()){
            if(p != null){
                stack.push(p);
                output.push(p);
                p = p.right;
            }
            else{
                p = stack.pop();
                p = p.left;
            }
        }

        List<Integer> res = new ArrayList<>();
        while(!output.isEmpty())
            res.add(output.pop().val);
        return res;
    }
}
