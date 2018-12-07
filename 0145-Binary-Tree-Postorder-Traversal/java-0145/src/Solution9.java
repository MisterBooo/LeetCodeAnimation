/// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-05-31

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Stack;

// Morris PostOrder Traversal
//
// Time Complexity: O(n)
// Space Complexity: O(1)
public class Solution9 {

    public List<Integer> postorderTraversal(TreeNode root) {

        ArrayList<Integer> res = new ArrayList<Integer>();
        if(root == null)
            return res;

        TreeNode dummyRoot = new TreeNode(-1);
        dummyRoot.left = root;

        TreeNode cur = dummyRoot;
        while(cur != null){
            if(cur.left == null)
                cur = cur.right;
            else{
                TreeNode pre = cur.left;
                while(pre.right != null && pre.right != cur)
                    pre = pre.right;

                if(pre.right == null){
                    pre.right = cur;
                    cur = cur.left;
                }
                else{
                    pre.right = null;
                    reverseTraversal(cur.left, res);
                    cur = cur.right;
                }
            }
        }
        return res;
    }

    private void reverseTraversal(TreeNode node, ArrayList<Integer> res){
        int start = res.size();
        while(node != null){
            res.add(node.val);
            node = node.right;
        }

        int i = start, j = res.size() - 1;
        while(i < j){
            Integer t = res.get(i);
            res.set(i, res.get(j));
            res.set(j, t);

            i ++;
            j --;
        }
    }
}
