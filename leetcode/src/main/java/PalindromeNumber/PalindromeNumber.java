package PalindromeNumber;

/**
 * @Author: Wrui
 * @Date: 2019/3/6 15:49
 */
public class PalindromeNumber {
    public static void main(String[] args) {
        boolean result = isPalindrome(1233321);
        System.out.println(result);
    }
    public static boolean isPalindrome(int x) {
        if (x<0){
            return false;
        }
        int revertNumber = 0;
        while (x>revertNumber){
            revertNumber = revertNumber*10+x%10;
            x = x/10;
        }
        return x == revertNumber||x== revertNumber/10;
    }
}
