# LeetCode 第 946 号问题：验证栈序列

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 946 号问题：验证栈序列。题目难度为 Medium，目前通过率为 56.5% 。

#### 题目描述

> 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 
>

```java
示例：
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

#### 题目解析

出栈结果存储在队列中，按元素顺序push进入栈，每push一个元素，即检查是否与队列首部元素相同，若相同则弹出队列首元素，弹出栈顶元素，直到两个元素不同结束，若最终栈为空，说明序列合法，否则不合法。

#### 动画理解

![](../Animation/Animation.gif)

#### 代码实现

```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        
        int N = pushed.length;
        Stack<Integer> stack = new Stack();
        
        int j = 0;
        for (int x: pushed) {
            stack.push(x);
            while (!stack.isEmpty() && j < N && stack.peek() == popped[j]) {
                //队头元素出队，栈顶元素出栈
                stack.pop();
                j++;
            }
        }
        if (!stack.isEmpty()){
            return false;
        }
        return true;
    }
}
```

#### 复杂度分析

+ 时间复杂度：O(n)。
+ 空间复杂度：O(n)。

