#### 题目描述

> 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
>
> + push(x) —— 将元素 x 推入栈中。
> + pop() —— 删除栈顶的元素。
> + top() —— 获取栈顶元素。
> + getMin() —— 检索栈中的最小元素。

```java
示例：
   	MinStack minStack = new MinStack();
	minStack.push(-2);
	minStack.push(0);
	minStack.push(-5);
	minStack.push(1)
	minStack.getMin();   --> 返回 -5.
	minStack.pop();
	minStack.top();      --> 返回 -5.
	minStack.getMin();   --> 返回 -5.
```

#### 题目解析

为了能在常数时间内检测到栈中的最小元素，我们可以通过"空间换时间"的方式进行实现，为栈本身（数据栈\_data）增加一个辅助栈（最小值栈\_min）。每一次元素入 \_data 栈，则在 \_min 栈中增加对应的最小值；当 \_data 栈中的元素出栈，则 \_min 栈也进行出栈操作

#### 动画理解

![](../Animation/Animation.gif)

#### 代码实现

```java
class MinStack {

    private Stack<Integer> _data;
    private Stack<Integer> _min;

    /** initialize your data structure here. */
    public MinStack() {
        _data = new Stack<>();
        _min = new Stack<>();
    }
    
    public void push(int x) {
        _data.add(x);
        if (_min.isEmpty()){
            _min.push(x);
        }
        else{
            if (x > _min.peek()){
                x = _min.peek();
            }
            _min.push(x);
        }
    }
    
    public void pop() {
        _data.pop();
        _min.pop();
    }
    
    public int top() {
        return _data.peek();
    }
    
    public int getMin() {
        return _min.peek();
    }
}
```

#### 复杂度分析

+ 时间复杂度：O(1)。
+ 空间复杂度：O(n)。

