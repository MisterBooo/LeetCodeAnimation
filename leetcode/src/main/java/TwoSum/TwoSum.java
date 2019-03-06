package TwoSum;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        int first, second, firstIndex = 0, secondIndex = 0;
        for (int i = 0; i < nums.length; i++) {
            firstIndex = i;
            first = nums[i];
            int optional = target - first;
            for (int j = firstIndex; j < nums.length; j++) {
                if (nums[j] < optional) {
                    continue;
                } else if (nums[j] == optional) {
                    second = nums[j];
                    secondIndex = j;
                    break;
                } else {
                    break;
                }
            }
            if (secondIndex != 0) {
                break;
            }
        }
        int[] result = new int[]{firstIndex, secondIndex};
        return result;
    }

    public static void main(String[] args) {
        int[] input = new int[]{2, 7, 11, 15};
        int[] result = twoSum(input, 9);
        System.out.println(result.toString());
        int i = 0;
        while (i < 10) {
            i++;
            if (i == 3) {
                continue;
            }
            System.out.println(i);
        }
    }
}