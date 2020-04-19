# LeetCode 第 20 号问题：有效的括号

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 20 号问题：有效的括号。题目难度为 Easy，目前通过率为 37.8% 。

### 题目描述

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**

```
输入: "()"
输出: true
```

**示例 2:**

```
输入: "()[]{}"
输出: true
```

**示例 3:**

```
输入: "(]"
输出: false
```

**示例 4:**

```
输入: "([)]"
输出: false
```

**示例 5:**

```
输入: "{[]}"
输出: true
```

### 题目解析

这道题让我们验证输入的字符串是否为括号字符串，包括大括号，中括号和小括号。

这里我们使用**栈**。

- 遍历输入字符串
- 如果当前字符为左半边括号时，则将其压入栈中
- 如果遇到右半边括号时，**分类讨论：**
- 1）如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环  
- 2）若此时栈为空，则直接返回false
- 3）若不为对应的左半边括号，反之返回false

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/xu55u.gif)

### 代码实现

```
class Solution {
public:
    bool isValid(string s) {

        stack<char> stack;
        for( int i = 0 ; i < s.size() ; i ++ )
            if( s[i] == '(' || s[i] == '{' || s[i] == '[')
                stack.push(s[i]);
            else{

                if( stack.size() == 0 )
                    return false;

                char c = stack.top();
                stack.pop();

                char match;
                if( s[i] == ')' ){
                    match = '(';
                }
                else if( s[i] == ']' ){
                    match = '[';
                }
                else{
                    match = '{';
                }

                if(c != match)  return false;
            }

        if( stack.size() != 0 )
            return false;

        return true;
    }
};
```

![](../../Pictures/qrcode.jpg)