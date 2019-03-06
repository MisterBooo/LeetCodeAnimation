package LongestPalindromicSubstring005;

/**
 * @Author: Wrui
 * @Date: 2019/3/6 15:15
 */
public class LongestPalindromicSubstring {
    public static void main(String[] args) {
        String result = longestPalindrome("abac");
        String result1 = longestPalindrome1("abacaba");
        System.out.println(result);
        System.out.println(result1);
    }

    public static String longestPalindrome(String s) {
        if (s.length() <= 1)
            return s;
        //子串长度
        for (int i = s.length(); i > 0; i--) {
            for (int j = 0; j <= s.length() - i; j++) {
                //子串位置
                String sub = s.substring(j, i + j);
                //计数，用来判断是否对称
                int count = 0;
                //左右对称判断
                for (int k = 0; k < sub.length() / 2; k++) {
                    if (sub.charAt(k) == sub.charAt(sub.length() - k - 1))
                        count++;
                }
                if (count == sub.length() / 2)
                    return sub;
            }
        }
        //表示字符串中无回文子串
        return "";

    }

    private static int maxLen = 0;

    private static String sub = "";

    public static String longestPalindrome1(String s) {
        if (s.length() <= 1)
            return s;

        for (int i = 0; i < s.length() - 1; i++) {
            //单核回文
            findLongestPalindrome(s, i, i);
            //双核回文
            findLongestPalindrome(s, i, i + 1);
        }
        return sub;
    }

    public static void findLongestPalindrome(String s, int low, int high) {
        while (low >= 0 && high <= s.length() - 1) {
            if (s.charAt(low) == s.charAt(high)) {
                if (high - low + 1 > maxLen) {
                    maxLen = high - low + 1;
                    sub = s.substring(low, high + 1);
                }
                //向两边扩散找当前字符为中心的最大回文子串
                low--;
                high++;
            } else
                break;
        }
    }

}
