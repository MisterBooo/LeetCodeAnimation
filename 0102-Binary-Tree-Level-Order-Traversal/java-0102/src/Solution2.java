/// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/description/
/// Author : liuyubobobo
/// Time   : 2018-10-16

import java.util.ArrayList;
import java.util.List;
import java.util.LinkedList;
import java.util.Queue;

/// BFS
/// No need to store level information in the queue :-)
///
/// Time Complexity: O(n), where n is the number of nodes in the tree
/// Space Complexity: O(n)
class Solution2 {

    public List<List<Integer>> levelOrder(TreeNode root) {

        ArrayList<List<Integer>> res = new ArrayList<>();
        if(root == null)
            return res;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int levelNum = 1;

        while(!queue.isEmpty()){

            int newLevelNum = 0;
            ArrayList<Integer> level = new ArrayList<>();
            for(int i = 0; i < levelNum; i ++){
                TreeNode node = queue.remove();
                level.add(node.val);

                if(node.left != null){
                    queue.add(node.left);
                    newLevelNum ++;
                }
                if(node.right != null){
                    queue.add(node.right);
                    newLevelNum ++;
                }
            }

            res.add(level);
            levelNum = newLevelNum;
        }

        return res;
    }
}
