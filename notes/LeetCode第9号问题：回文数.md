# LeetCode 第 9 号问题：回文数

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)



题目来源于 LeetCode 第 9 号问题：回文数。题目难度为 Easy，目前通过率为 56.0%。

## 题目描述

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

```
输入: 121
输出: true
```

**示例 2:**

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3:**

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

**进阶:**

你能不将整数转为字符串来解决这个问题吗？



## 题目解析

### 解法一：普通解法

最好理解的一种解法就是先将 **整数转为字符串** ，然后将字符串分割为数组，只需要循环数组的一半长度进行判断对应元素是否相等即可。

#### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/ods8b.gif)

#### 代码实现

```java
///简单粗暴，看看就行
class Solution {
    public boolean isPalindrome(int x) {
        String reversedStr = (new StringBuilder(x + "")).reverse().toString();
        return (x + "").equals(reversedStr);
    }
}
```



### 解法二：进阶解法---数学解法

通过取整和取余操作获取整数中对应的数字进行比较。

举个例子：1221 这个数字。

- 通过计算 1221 / 1000， 得首位1
- 通过计算 1221 % 10， 可得末位 1
- 进行比较
- 再将 22 取出来继续比较

#### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/v3tkl.gif)

#### 代码实现

```java
class Solution {
    public boolean isPalindrome(int x) {
        //边界判断
        if (x < 0) return false;
        int div = 1;
        //
        while (x / div >= 10) div *= 10;
        while (x > 0) {
            int left = x / div;
            int right = x % 10;
            if (left != right) return false;
            x = (x % div) / 10;
            div /= 100;
        }
        return true;
    }
}
```



### 解法三：进阶解法---巧妙解法

直观上来看待回文数的话，就感觉像是将数字进行对折后看能否一一对应。

所以这个解法的操作就是 **取出后半段数字进行翻转**。

这里需要注意的一个点就是由于回文数的位数可奇可偶，所以当它的长度是偶数时，它对折过来应该是相等的；当它的长度是奇数时，那么它对折过来后，有一个的长度需要去掉一位数（除以 10 并取整）。

具体做法如下：

- 每次进行取余操作 （ %10），取出最低的数字：`y = x % 10`
- 将最低的数字加到取出数的末尾：`revertNum = revertNum * 10 + y`
- 每取一个最低位数字，x 都要自除以 10
- 判断 `x` 是不是小于 `revertNum` ，当它小于的时候，说明数字已经对半或者过半了
- 最后，判断奇偶数情况：如果是偶数的话，revertNum 和 x 相等；如果是奇数的话，最中间的数字就在revertNum 的最低位上，将它除以 10 以后应该和 x 相等。

#### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/0siv7.png)

#### 代码实现

```java
class Solution {
    public boolean isPalindrome(int x) {
        //思考：这里大家可以思考一下，为什么末尾为 0 就可以直接返回 false
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;
        int revertedNumber = 0;
        while (x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }
        return x == revertedNumber || x == revertedNumber / 10;
    }
}
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/kcet5.png)