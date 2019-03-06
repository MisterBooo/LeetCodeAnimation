package LengthOfLongestSubstring;

import java.util.*;

/**
 * @Author: Wrui
 * @Date: 2019/2/14 16:52
 */
public class LengthOfLongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int ans = 0;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j <= n; j++)
                if (allUnique(s, i, j)) ans = Math.max(ans, j - i);
        return ans;
    }

    public static boolean allUnique(String s, int start, int end) {
        Set<Character> set = new HashSet<Character>();
        for (int i = start; i < end; i++) {
            Character ch = s.charAt(i);
            if (set.contains(ch)) return false;
            set.add(ch);
        }
        return true;
    }

    public static void main(String[] args) {
        String testA = "abcabcbb";
        int result = lengthOfLongestSubstring(testA);
        System.out.println(result);
    }
}
