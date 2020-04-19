# LeetCode 第 215 号问题：数组中的第K个最大元素

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 215 号问题：数组中的第K个最大元素。题目难度为 Medium，目前通过率为 62.0% 。

#### 题目描述

> 在未排序的数组中找到第 **k** 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
>

```java
示例1：
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例2：
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

#### 题目解析

维护一个K大小的最小堆，堆中元素个数小于K时，新元素直接进入堆中；否则，当堆顶小于新元素时，弹出堆顶，将新元素加入堆。

由于堆是最小堆，堆顶是堆中的最小元素，新元素都会保证比堆顶小（否则新元素替换堆顶），故堆中K个元素是已扫描元素里最大的K个；堆顶元素即为第K大数。

#### 动画理解

![](../Animation/Animation.gif)

#### 代码实现

Java语言

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        // // 创建一个小顶堆（优先队列模拟）
        PriorityQueue<Integer> heap =
            new PriorityQueue<Integer>();

        // 在堆中维护当前最大k个元素
        for (int i = 0; i < nums.length; i++){
            if(heap.size() < k){
                heap.add(nums[i]);
            }else if (heap.element() < nums[i]){
                heap.poll();
                heap.add(nums[i]);
            }
        }
        return heap.poll();        
  }
}
```

C++语言实现

```c++
#include <queue>

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int> > Q;
        for(int i = 0; i < nums.size(); i++){
            if(Q.size() < k){
                Q.push(nums[i]);
            }
            else if(Q.top() < nums[i]){
                Q.pop();
                Q.push(nums[i]);
            }
        }
        
        return Q.top();
    }
};
```

#### 复杂度分析

+ 时间复杂度：向大小为 k 的堆中添加元素的时间复杂度为O(logK)，重复该操作 N 次，故总时间复杂度为 O(NlogK)
+ 空间复杂度：O(K)



