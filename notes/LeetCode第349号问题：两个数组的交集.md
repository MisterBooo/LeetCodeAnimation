# LeetCode 第 349 号问题：两个数组的交集

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 349 号问题：两个数组的交集。题目难度为 Easy，目前通过率为 62.3% 。

### 题目描述

给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
```

**示例 2:**

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
```

**说明:**

- 输出结果中的每个元素一定是唯一的。
- 我们可以不考虑输出结果的顺序。

### 题目解析

容器类 [set](https://zh.cppreference.com/w/cpp/container/set) 的使用。

- 遍历 num1，通过 set 容器 record 存储 num1 的元素
- 遍历 num2 ，在 record 中查找是否有相同的元素，如果有，用 set 容器 resultSet 进行存储
- 将 resultSet 转换为 vector 类型

### 动画描述

![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/xfx1k.gif)

### 代码实现

```
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        set<int> record;
        for(int i = 0; i < nums1.size(); i ++){
            record.insert(nums1[i]);
        }
        
        set<int> resultSet;
        for(int i = 0; i < nums2.size();i++){
            if(record.find(nums2[i]) != record.end()){
                resultSet.insert(nums2[i]);
            }
        }
        
        vector<int> resultVector;
        for(set<int>::iterator iter=resultSet.begin(); iter != resultSet.end();iter++){
            resultVector.push_back(*iter);
        }
        return resultVector;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/y7jcl.png)