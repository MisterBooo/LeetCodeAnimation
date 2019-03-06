package LeetCodeChina;

/**
 * @Author: Wrui
 * @Date: 2019/3/6 16:10
 */
public class IsPalindrome {
    public static void main(String[] args) {
        Boolean result = isPalindrome("A man, a plan, a canal: Panama");
        System.out.println(result);
    }
    public static boolean isPalindrome(String s) {
        String str = s.replaceAll("[^a-zA-Z0-9]","").toLowerCase();
        for (int i = 0;i<str.length()/2;i++){
            if (str.charAt(i) == str.charAt(str.length()-i-1)){
                continue;
            }else {
                return false;
            }
        }
        return true;
    }
}
