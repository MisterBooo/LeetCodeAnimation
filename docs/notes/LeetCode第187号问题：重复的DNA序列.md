# LeetCode 第 187 号问题：重复的 DNA 序列

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 上第 187 号问题：重复的 DNA 序列。

### 题目描述

所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列（子串）。

### 题目解析

首先，先将  A , C , G , T 的 ASCII 码用二进制来表示：

A: 0100 0**001**　　C: 0100 0**011**　　G: 0100 0**111**　　T: 0101 0**100**

通过观察发现每个字符的后三位都不相同，因此可以用**末尾的三位**来区分这四个字符。

题目要求是查找 10 个字母长的序列，这里我们将每个字符用三位来区分的话，10 个字符就需要 30 位 ，在32位机上也 OK 。

为了提取出后 30 位，需要使用 **mask** ，取值为 0x7ffffff（二进制表示含有 27 个 1） ，先用此 mask 可取出**整个序列**的后 27 位，然后再向左平移三位可取出 10 个字母长的序列 （ 30 位）。

为了保存子串的频率，这里使用**哈希表**。

首先当取出第十个字符时，将其存在哈希表里，和该字符串出现频率映射，之后每向左移三位替换一个字符，查找新字符串在哈希表里出现次数，如果之前刚好出现过一次，则将当前字符串存入返回值的数组并将其出现次数加一，如果从未出现过，则将其映射到 1。

### 

### 动画描述

待补充

### 代码实现

```c++
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        vector<string> res;
        if (s.size() <= 10) return res;
        int mask = 0x7ffffff, cur = 0;
        unordered_map<int, int> m;
        for (int i = 0; i < 9; ++i) {
            cur = (cur << 3) | (s[i] & 7);
        }
        for (int i = 9; i < s.size(); ++i) {
            cur = ((cur & mask) << 3) | (s[i] & 7);
            if (m.count(cur)) {
                if (m[cur] == 1) res.push_back(s.substr(i - 9, 10));
                ++m[cur]; 
            } else {
                m[cur] = 1;
            }
        }
        return res;
    }
};
```





![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/xzbvx.png)