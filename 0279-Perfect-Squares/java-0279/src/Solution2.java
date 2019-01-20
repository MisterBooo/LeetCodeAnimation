/// Source : https://leetcode.com/problems/perfect-squares/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

import java.util.Arrays;

/// Memory Search
/// Time Complexity: O(n)
/// Space Complexity: O(n)
public class Solution2 {

    public int numSquares(int n) {

        int[] mem = new int[n+1];
        Arrays.fill(mem, -1);

        return numSquares(n, mem);
    }

    private int numSquares(int n, int[] mem){

        if(n == 0)
            return 0;

        if(mem[n] != -1)
            return mem[n];

        int res = Integer.MAX_VALUE;
        for(int i = 1; n - i * i >= 0; i ++ )
            res = Math.min(res, 1 + numSquares(n - i * i, mem));
        return mem[n] = res;
    }

    public static void main(String[] args) {

        System.out.println((new Solution2()).numSquares(12));
        System.out.println((new Solution2()).numSquares(13));
    }
}
