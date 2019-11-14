# LeetCode 第 690 号问题：员工的重要性

> 本文首发于公众号「五分钟学算法」，是[图解 LeetCode ](<https://github.com/MisterBooo/LeetCodeAnimation>)系列文章之一。
>
> 个人网站：[https://www.cxyxiaowu.com](https://www.cxyxiaowu.com)

题目来源于 LeetCode 第 690 号问题：员工的重要性。

### 题目描述

给定一个保存员工信息的数据结构，它包含了员工**唯一的id**，**重要度** 和 **直系下属的id**。

比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15, 10, 5 。那么员工 1 的数据结构是[1, 15, [2]]，员工 2 的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5, []]。注意虽然员工 3 也是员工 1 的一个下属，但是由于**并不是直系**下属，因此没有体现在员工1的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工 id，返回这个员工和他所有下属的重要度之和。

**示例 1:**

```
输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出: 11
解释:
员工 1 自身的重要度是 5，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11。
```

**注意:**

1. 一个员工最多有一个**直系**领导，但是可以有多个**直系**下属
2. 员工数量不超过 2000。

### 

### 题目解析

利用哈希表来存储员工的信息，找到指定 id 的员工后，采用广度优先遍历算法来遍历编号为 id 的员工及其下属员工。

### 动画描述

待补充

### 代码实现

```
public int getImportance(List<Employee> employees, int id) {
        Employee emp = null;
        //重要度
		int sum = 0;   
        //存储员工信息
		HashMap<Integer,Employee> map=new HashMap<Integer,Employee>();  /
	    for(Employee e:employees) {
	    	map.put(e.id, e);
	    }
	    //使用广度优先遍历员工
	    ArrayDeque<Employee> queue=new ArrayDeque<Employee>();
	    queue.addLast(map.get(id));
	    while(!queue.isEmpty()) {
	    	emp=queue.removeFirst();
	    	sum+=emp.importance;
	    	for(int i:emp.subordinates) {
	    		queue.addLast(map.get(i));
	    	}
	    }
		return sum;

    }
```



![](https://blog-1257126549.cos.ap-guangzhou.myqcloud.com/blog/wvk3e.png)