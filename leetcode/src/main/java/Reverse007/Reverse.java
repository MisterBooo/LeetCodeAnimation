package Reverse007;

/**
 * @Author: Wrui
 * @Date: 2019/2/15 10:12
 */
public class Reverse {
    public static int reverse(int x) {
        String tmp = String.valueOf(x);
        String result = "";
        int resultInt = 0;
        if (x >= 0) {
            for (int i = 0; i < tmp.length(); i++) {
                result += tmp.charAt(tmp.length() - 1 - i);
            }
        } else {
            result = "-";
            for (int i = 0; i < tmp.length() - 1; i++) {
                result += tmp.charAt(tmp.length() - 1 - i);
            }
        }
        try {
            resultInt = Integer.parseInt(result);
        } catch (NumberFormatException e) {
            resultInt = 0;
        }
        return resultInt;
    }

    public static void main(String[] args) {
        int num1 = 123;
        int num2 = -123;
        int result = reverse(num1);
        int result1 = reverse(num2);
        System.out.println(result);
        System.out.println(result1);
    }
}
