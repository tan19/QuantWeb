# Adhoc (1)

## Sweep Line

基础知识：一个很巧妙的解决时间安排冲突的算法，本身比较容易些也很容易理解
常见题目：
- Leetcode 253 Meeting Room II（Meeting Room I也可以使用）
- Leetcode 218 The Skyline Problem
- Leetcode 759 Employee Free Time


## String

题目分类	题目编号
字符	520
回文串的定义	125
公共前缀	14
单词	434、58
字符串的反转	344、541、557、151
字符的统计	387、389、383、242、49、451、423、657、551、696、467、535
数字与字符串间转换	299、412、506、539、553、537、592、640、38、443、8、13、12、273、165、481
子序列	392、524、521、522
高精度运算	66、67、415、43、306
字符串变换	482、6、68
字符串匹配	28、686、459、214
中心拓展法	5、647

## Stack

- Leetcode 232. Implement Queue using Stacks
- Leetcode 150. Evaluate Reverse Polish Notation
- Leetcode 224. Basic Calculator II (I, II, III, IV)
- Leetcode 20. Valid Parentheses
- Leetcode 1472. Design Browser History
- Leetcode 1209. Remove All Adjacent Duplicates in String II
- Leetcode 1249. Minimum Remove to Make Valid Parentheses
- Leetcode 735. Asteroid Collision



题目分类	题目编号
用栈访问最后若干元素	682、71、388
栈与计算器	150、227、224
栈与括号匹配	20、636、591、32
递归	385、341、394


## Sort

基础知识：快速排序（Quick Sort）， 归并排序（Merge Sort）的原理与代码实现。需要能讲明白代码中每一行的目的。快速排序时间复杂度平均状态下O（NlogN），空间复杂度O（1），归并排序最坏情况下时间复杂度O（NlogN），空间复杂度O（N）

### 入门题目：
- Leetcode 148. Sort List
- Leetcode 56. Merge Intervals

### 进阶题目：
- Leetcode 179. Largest Number
- Leetcode 75. Sort Colors
- Leetcode 215. Kth Largest Element
- Leetcode 4. Median of Two Sorted Arrays

注意：后两题是与快速排序非常相似的快速选择（Quick Select）算法，面试中很常考


# Queue

- Leetcode 225. Implement Stack using Queues
- Leetcode 346. Moving Average from Data Stream
- Leetcode 281. Zigzag Iterator
- Leetcode 1429. First Unique Number
- Leetcode 54. Spiral Matrix
- Leetcode 362. Design Hit Counter
- 
## Hash

- Leetcode 1. Two Sum
- Leetcode 146. LRU Cache (Python中可以使用OrderedDict来代替)
- Leetcode 128. Longest Consecutive Sequence
- Leetcode 73. Set Matrix Zeroes
- Leetcode 380. Insert Delete GetRandom O(1)
- Leetcode 49. Group Anagrams
- Leetcode 350. Intersection of Two Arrays II
- Leetcode 299. Bulls and Cows
- Leetcode 348 Design Tic-Tac-Toe


题目分类	题目编号
哈希表的查找、插入及删除	217、633、349、128、202、500、290、532、205、166、466、138
哈希表与索引	1、167、599、219、220
哈希表与统计	594、350、554、609、454、18
哈希表与前缀和	560、523、525

## Greedy

题目分类	题目编号
数组与贪心算法	605、121、122、561、455、575、135、409、621、179、56、57、228、452、435、646、406、48、169、215、75、324、517、649、678、420
子数组与贪心算法	53、134、581、152
子序列与贪心算法	334、376、659
数字与贪心	343
单调栈法	496、503、456、316、402、321、84、85



## Problems (0, 1, 0)
### LC73. Set Matrix Zeroes (Medium)
???+ Note "LC73. Set Matrix Zeroes (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/set-matrix-zeroes/" target="_blank">LC73. Set Matrix Zeroes (Medium)</a>**
        - Algorithm: Adhoc
        - Time Complexity: $O(n^2)$
        - Space Complexity: $O(1)$
        
    === "Solution"
        This is an Adhoc problem.

    === "Adhoc $O(n^2)$"
        === "Python"
            ``` Python
            class Solution:
                def setZeroes(self, matrix: List[List[int]]) -> None:
                    """
                    Do not return anything, modify matrix in-place instead.
                    """

                    # pre-processing to check the first row and the first column
                    firstRowHasZero = any([matrix[0][j] == 0 for j in range(len(matrix[0]))])
                    firstColHasZero = any([matrix[i][0] == 0 for i in range(len(matrix))])
                    
                    # KEY: check each element and record the results in the first row and the first column
                    for i in range(len(matrix)):
                        for j in range(len(matrix[0])):
                            if matrix[i][j] == 0:
                                matrix[i][0] = matrix[0][j] = 0

                    # sweep
                    for i in range(1, len(matrix)): # starts from 1, not 0
                        if matrix[i][0] == 0:
                            for j in range(len(matrix[0])):
                                matrix[i][j] = 0

                    for j in range(1, len(matrix[0])): # starts from 1, not 0
                        if matrix[0][j] == 0:
                            for i in range(len(matrix)):
                                matrix[i][j] = 0

                    # post-processing
                    if firstColHasZero:
                        for i in range(len(matrix)):
                            matrix[i][0] = 0

                    if firstRowHasZero:
                        for j in range(len(matrix[0])):
                            matrix[0][j] = 0

            ```        