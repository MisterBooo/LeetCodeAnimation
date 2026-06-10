# LeetCode 第 394 号问题：字符串解码

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 394 号问题：字符串解码。题目难度为 Medium，目前通过率为 49.7% 。

#### 题目描述

> 给定一个经过编码的字符串，返回它解码后的字符串。
>
> 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
>
> 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
>
> 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
>

```java
示例：
    s = "3[a]2[bc]", 返回 "aaabcbc".
	s = "3[a2[c]]", 返回 "accaccacc".
	s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
```

#### 题目解析

由于中括号[]存在嵌套，因此需要**从内向外**生成并拼接字符串，这与栈的**先进后出**的特性相一致。我们可以增加一个辅助栈 **stack\_multi** 用于存储紧挨着左方括号[ 的倍数，每当遇到左方括号时，**res** 与 **multi** 的值进行入栈操作；当遇到右方括号时，进行出栈操作；当遇到数字时，更新 **multi** 的值；当遇到除方括号和数字以外的其他字符时，更新 **res** 的值。需要注意更新 **multi** 的值要考虑连续多位数字的情况。

#### 动画理解

![](../Animation/Animation.gif)

#### 代码实现

```java
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
```

#### 复杂度分析

+ 时间复杂度 *O*(*N*)，一次遍历字符串`s`；
+ 空间复杂度 *O(N)*，辅助栈在极端情况下需要线性空间，例如 `4[3[2[LeetCodeAnimation]]]`。



