class Solution {
    public String decodeString(String s) {
        StringBuilder res = new StringBuilder();
        int multi = 0;

        Stack<Integer> stack_multi = new Stack();
        Stack<String> stack_res = new Stack();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if ('[' == c){
                stack_multi.push(multi);
                stack_res.push(res.toString());
                multi = 0;
                res = new StringBuilder();
            }
            else if (']' == c) {
                StringBuilder tmp = new StringBuilder();
                int cur_multi = stack_multi.pop();
                for (int j = 0; j < cur_multi; j++){
                    tmp.append(res);
                }
                res = new StringBuilder(stack_res.pop() + tmp);
            }
            else if(c >= '0' && c <= '9'){
                multi = multi * 10 + (c - '0');
            }
            else{
                res.append(c);
            }
        }
        return res.toString();
    }
}