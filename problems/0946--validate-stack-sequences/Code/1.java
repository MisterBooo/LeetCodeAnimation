class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        
        int N = pushed.length;
        Stack<Integer> stack = new Stack();
        
        int j = 0;
        for (int x: pushed) {
            stack.push(x);
            while (!stack.isEmpty() && j < N && stack.peek() == popped[j]) {
                //队头元素出队，栈顶元素出栈
                stack.pop();
                j++;
            }
        }
        if (!stack.isEmpty()){
            return false;
        }
        return true;
    }
}