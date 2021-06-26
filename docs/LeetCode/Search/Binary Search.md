# Binary Search (4)

## Introduction

基础知识：二分法是用来解法基本模板，时间复杂度logN；常见的二分法题目可以分为两大类，显式与隐式，即是否能从字面上一眼看出二分法的特点：要查找的数据是否可以分为两部分，前半部分为X，后半部分为O

# Binary Search

== 显式二分法：
- Leetcode 34. Find First and Last Position of Element in Sorted Array
- Leetcode 33. Search in Rotated Sorted Array
- Leetcode 1095. Find in Mountain Array
- Leetcode 162. Find Peak Element
- Leetcode 278. First Bad Version
- Leetcode 74. Search a 2D Matrix
- Leetcode 240. Search a 2D Matrix II

== 隐式二分法：
- Leetcode 69. Sqrt(x)
- Leetcode 540. Single Element in a Sorted Array
- Leetcode 644. Maximum Average Subarray II
- Leetcode 528. Random Pick with Weight
- Leetcode 1300. Sum of Mutated Array Closest to Target
- Leetcode 1060. Missing Element in Sorted Array

题目分类	题目编号
二分查找应用(简单)	374、35、278、367、69、441
二分查找应用(中等)	34、540、275、436、300、354、658、162、4
二分查找与旋转数组	153、154、33、81
二分查找与矩阵	74、240
二分答案法	378、668、410、483


Binary search is an algorithm that finds a target number in a **sorted** array in $O(\log n)$ time.

=== "Python"
    ``` Python hl_lines="4"
    def binarySearch(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if target == arr[mid]:
            return mid
        elif target < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1

    return -1


    arr = [1,2,3,4,5]
    for n in range(0, 7):
        print(f'{n}: {binarySearch(arr, n)}')
    ```                

=== "C++"
    ``` Python
    int binarySearch() {

    }
    ```  

=== "Java"
    ``` Java 
    ```  

## Problems
| ID   | Title | Difficulty |
||||
| 704  | Binary Search | Medium|
| 1011  | Capacity To Ship Packages Within D Days | Medium|
| 1642 | Furthest Building You Can Reach | Medium|
| 34 | Find First and Last Position of Element in Sorted Array | Medium|

{% include "LC704.md" %}
{% include "LC1011.md" %}
{% include "LC1642.md" %}
{% include "LC34.md" %}





        
