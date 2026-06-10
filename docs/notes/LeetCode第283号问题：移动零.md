# LeetCode 第 283 号问题：移动零

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 283 号问题：移动零。题目难度为 Easy，目前通过率为 53.8% 。

### 题目描述

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例:**

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

### 题目解析

设定一个临时变量 k = 0，遍历数组 nums ，将非零元素移动到 nums[k]位 置，同时 k++，而后将【k,….nums.size()】中的元素置零。

### 解法一

创建一个临时数组 nonZeroElements ，遍历 nums ，将 nums 中非 0 元素赋值到 nonZeroElements中，而后按顺序将 nonZeroElements 赋值到 nums 上，未遍历的元素置 0 ；

动画如下：

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/0eeix.gif)

代码如下：

```
// 时间复杂度: O(n)
// 空间复杂度: O(n)
class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        vector<int> nonZeroElements;

        // 将vec中所有非0元素放入nonZeroElements中
        for(int i = 0 ; i < nums.size() ; i ++)
            if(nums[i])
                nonZeroElements.push_back(nums[i]);

        // 将nonZeroElements中的所有元素依次放入到nums开始的位置
        for(int i = 0 ; i < nonZeroElements.size() ; i ++)
            nums[i] = nonZeroElements[i];

        // 将nums剩余的位置放置为0
        for(int i = nonZeroElements.size() ; i < nums.size() ; i ++)
            nums[i] = 0;
    }
};

```

### 解法二

设定一个临时变量 k = 0，遍历数组 nums ，将非零元素移动到 nums[k] 位置，同时 k++，而后将【k,….nums.size()】中的元素置零。

动画如下：

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/jodp0.gif)

代码如下：

```
// 原地(in place)解决该问题
// 时间复杂度: O(n)
// 空间复杂度: O(1)
class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        int k = 0; // nums中, [0...k)的元素均为非0元素

        // 遍历到第i个元素后,保证[0...i]中所有非0元素
        // 都按照顺序排列在[0...k)中
        for(int i = 0 ; i < nums.size() ; i ++)
            if(nums[i])
                nums[k++] = nums[i];

        // 将nums剩余的位置放置为0
        for(int i = k ; i < nums.size() ; i ++)
            nums[i] = 0;
    }
};
```

### 解法三

思路：设定一个临时变量 k = 0，遍历数组 nums，将非零元素与之前的零元素进行交换，维护变量k的值。

动画如下：

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/gcetr.gif)
代码如下：
C++ Code：

```c++
// 原地(in place)解决该问题
// 时间复杂度: O(n)
// 空间复杂度: O(1)
class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        int k = 0; // nums中, [0...k)的元素均为非0元素

        // 遍历到第i个元素后,保证[0...i]中所有非0元素
        // 都按照顺序排列在[0...k)中
        // 同时, [k...i] 为 0
        for(int i = 0 ; i < nums.size() ; i ++)
            if(nums[i]){
                if(k != i){
                    swap(nums[k++] , nums[i]);
                }else{
                    k ++;
                }
            }
        }
};

```

Java Code：

```java
class Solution {
    public void moveZeroes(int[] nums) {
        // 双指针
        int i = 0;
        for(int j=0; j<nums.length; j++)
        {
            // 不为0，前移
            if(nums[j] != 0)
            {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
        }
    }
}
```

Python Code：

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 双指针
        i = 0
        for j in range(len(nums)):
            # 不为0，前移
            if nums[j] != 0:
                nums[i], nums[j] = nums[j], nums[i]
                i+=1
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/o6der.png)
