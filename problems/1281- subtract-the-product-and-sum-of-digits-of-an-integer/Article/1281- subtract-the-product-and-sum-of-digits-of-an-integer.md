### 题目描述

给你一个整数 `n`，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。

示例 1:

```
输入：n = 234
输出：15 
解释：
各位数之积 = 2 * 3 * 4 = 24 
各位数之和 = 2 + 3 + 4 = 9 
结果 = 24 - 9 = 15
```

示例 2:

```
输入：n = 4421
输出：21
解释： 
各位数之积 = 4 * 4 * 2 * 1 = 32 
各位数之和 = 4 + 4 + 2 + 1 = 11 
结果 = 32 - 11 = 21
```

**提示：**

```
1 <= n <= 10^5
```

### 题目解析

1、通过取模运算遍历数字每一位

2、通过两个变量在遍历过程中分别记录求和与求积

### 动画理解

![](../Animation/Animation.mp4)

‎⁨

### 参考代码

```java
class Solution {
    public int subtractProductAndSum(int n) {
        int addResult = 0, mulResult = 1;
        while (n > 0) {
            int num = n % 10;
            n /= 10;
            addResult += num;
            mulResult *= num;
        }
        return mulResult - addResult;
    }
}
```



### 复杂度分析

时间复杂度：O(logN)

空间复杂度：O(1)