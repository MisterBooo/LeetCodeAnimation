# LeetCode 第 290 号问题：单词规律

> 本文首发于公众号「图解面试算法」，是 [图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>) 系列文章之一。
>
> 同步博客：https://www.algomooc.com

题目来源于 LeetCode 上第 290 号问题：单词规律。题目难度为 Easy，目前通过率为 42.4% 。

#### 题目描述

> 给定一种规律 `pattern` 和一个字符串 `str` ，判断 `str` 是否遵循相同的规律。
>
> 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
>
> 说明：你可以假设 `pattern` 只包含小写字母， `str` 包含了由单个空格分隔的小写字母。  

```java
示例1：
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例2：
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例3：
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例4：
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
```

#### 题目解析

这道题目主要考察哈希表和字符串的内容。可以将题目拆解为下面三步：

1. 设置`pattern`字符到单词（字符串 `str`）的**映射（哈希）**，使用`HashMap()`存储；使用`HashSet()` 记录被使用过的单词  。
2. 若单词个数和`pattern`字符个数不匹配，返回false；
3. 遍历`pattern`，同时**对应的**向前移动 `str` 中单词的指针，每次拆分出`pattern`中的一个字符， **判断：**
   + 如果该字符**从未出现**在哈希表中：
     + 如果该字符对应的单词已被使用过 ，即`HashSet()`中包含该字符对应的单词，则返回false；
     + 将该字符与其对应的单词**做映射**，加入哈希表中；**标记**该字符指向的单词**为已使用**，并加入`HashSet()`；
   + 如果该字符在哈希表的**映射单词**与当前指向的单词不同，则返回false；

#### 动画理解

![](../Animation/Animation.gif)

#### 代码实现

Java语言

```java
class Solution {
    public boolean wordPattern(String pattern, String str) {
        HashMap<Character, String> map = new HashMap<>();
        HashSet<String> set = new HashSet<>();
        String[] array = str.split(" ");

        if (pattern.length() != array.length) {
            return false;
        }
        for (int i = 0; i < pattern.length(); i++) {
            char key = pattern.charAt(i);
            if (!map.containsKey(key)) {
                if (set.contains(array[i])) {
                    return false;
                }
                map.put(key, array[i]);
                set.add(array[i]);
            } else {
                if (!map.get(key).equals(array[i])) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

#### 复杂度分析

+ 时间复杂度：遍历`pattren` 一遍，时间复杂度O(n)
+ 空间复杂度：需要申请`HashMap()` 与 `HashSet()` ，还需要将字符串 `str` 分割后存储起来，空间复杂度O(n)



