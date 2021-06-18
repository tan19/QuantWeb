# Binary Search (3)

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

## Problems (0, 3, 0)
### LC704. Binary Search (Easy)
???+ Note "LC704. Binary Search (Easy)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/binary-search/" target="_blank">LC704. Binary Search (Easy)</a>**
        - Algorithm: Binary Search
        - Time Complexity: $O(\log n)$
        - Space Complexity: $O(1)$
        
    === "Solution"
        This is a standard binary search problem.

    === "Binary Search O(n)"
        === "Python"
            ``` Python
            class Solution:
                def search(self, nums: List[int], target: int) -> int:
                    left, right = 0, len(nums) - 1
                    while left <= right:
                        mid = (left + right) // 2
                        if target == nums[mid]:
                            return mid
                        elif target < nums[mid]:
                            right = mid - 1
                        else:
                            left = mid + 1

                    return -1
            ```        

### LC1011. Capacity To Ship Packages Within D Days (Medium)
???+ Note "LC1011. Capacity To Ship Packages Within D Days (Medium)"    
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/" target="_blank">LC1011. Capacity To Ship Packages Within D Days (Medium)</a>**
        - Algorithm: Binary Search
        - Time Complexity: $O(n\log(S))$, where $S$ is the sum of all weights.
        - Space Complexity: $O(1)$

    === "Solution"
        Binary search for the $\mbox{capacity} \in [max(weights), sum(weights)]$. For each of these $O(\log n)$ capacity, it costs $O(n)$ to check if the plan can be delivered. Total cost is thus $O(n \log n)$.
    === "Binary Search $O(n\log(S))$"
        === "Python"
            ``` Python
            class Solution:
                def canDeliver(self, weights, capacity, days) -> bool:
                    i = 0
                    for d in range(days):
                        load = 0
                        while load <= capacity and i < len(weights):
                            load += weights[i]
                            i += 1
                        if load > capacity:
                            load -= weights[i-1]
                            i -= 1
                        elif i >= len(weights):
                            return True
                    return False
                        
                def shipWithinDays(self, weights: List[int], days: int) -> int:
                    minCap, maxCap = max(weights), sum(weights)
                    while minCap <= maxCap:
                        capacity = (minCap + maxCap) // 2
                        if self.canDeliver(weights, capacity, days):
                            maxCap = capacity - 1
                        else:
                            minCap = capacity + 1
                    return minCap   
            ```

### LC1642. Furthest Building You Can Reach (Medium)
???+ Note "LC1642. Furthest Building You Can Reach (Medium)"    
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/furthest-building-you-can-reach/" target="_blank">1642. Furthest Building You Can Reach (Medium)</a>**
        - Algorithm: Binary Search
        - Time Complexity: $O(n\log n)$
        - Space Complexity: $O(1)$

    === "Solution"
        Binary search to propose the furthest building you try to reach, which costs $O(\log n)$. Within each proposal, it takes $O(n)$ to check if you are indeed able to finish. Total cost is thus $O(n \log n)$.
    === "Binary Search $O(n\log n)$"
        === "Python"
            ``` Python
            class Solution:
                def canFinish(self, heights, bricks, ladders) -> bool:    
                    steps = sorted([heights[i] - heights[i-1] for i in range(1, len(heights)) if heights[i] - heights[i-1] > 0])
                            
                    if not steps:
                        return True

                    if ladders == 0:
                        return bricks >= sum(steps)

                    return bricks >= sum(steps[:-ladders])

                def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
                    left, right = 0, len(heights) - 1
                    while left <= right:
                        mid = (left + right) // 2
                        if self.canFinish(heights[:mid+1], bricks, ladders):
                            left = mid + 1
                        else:
                            right = mid - 1
                    
                    return max(0, right)
            ```
        
### LC34. Find First and Last Position of Element in Sorted Array (Medium)
???+ Note "LC34. Find First and Last Position of Element in Sorted Array (Medium)"    
    === "Info"
        - **<a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank">LC34. Find First and Last Position of Element in Sorted Array (Medium)</a>**
        - Algorithm: Binary Search
        - Time Complexity: $O(\log n)$
        - Space Complexity: $O(1)$

    === "Solution"

    === "Main Method O(n)"
        === "Python"
            ``` Python            
            ```