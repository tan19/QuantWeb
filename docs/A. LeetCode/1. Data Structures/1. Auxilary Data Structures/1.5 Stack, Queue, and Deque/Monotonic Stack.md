# Monotonic Stack (0)

<a href="https://leetcode-cn.com/tag/monotonic-stack/problemset/" target="_blank">单调栈题库（共47题）</a>

<a href="https://leetcode-cn.com/tag/monotonic-queue/problemset/" target="_blank">单调队列题库（共11题）</a>

## Introduction

基础知识：单调栈一般用于解决数组中找出每个数字的第一个大于／小于该数字的位置或者数字；单调队列只见过一道题需要使用；不论单调栈还是单调队列，单调的意思是保留在栈或者队列中的数字是单调递增或者单调递减的
常见题目：
- Leetcode 85 Maximum Rectangle
- Leetcode 84 Largest Rectangle in Histogram
- Leetcode 739 Daily Temperatures
- Leetcode 901 Online Stock Span
- Leetcode 503 Next Greater Element II
- Leetcode 239 Sliding Window Maximum （唯一的单调队列题）
- Leetcode 402 Remove K Digits


Monotonic stack is a data structure that is able to find the *nearest* event (not the *furthest*) for each of the $n$ elements in an array of size $n$ in $O(n)$ time and $O(1)$ space.


=== "Python"
    ``` Python
    #
    # Monotonic stack to find the next bigger number.
    #
    def monotonicStack(arr):
        firstHigherValue = ['#'] * len(arr)

        stack = []
        for i, n in enumerate(arr):
            while stack and n > stack[-1][1]:
                idx, value = stack.pop()
                # do something with (idx, value)
                firstHigherValue[idx] = n
            stack.append((i, n))

        return firstHigherValue

    arr = [1,3,4,6,2,1,4,5]
    print(monotonicStack(arr))    
    ```                

=== "C++"
    ``` Python
    int binarySearch() {

    }
    ```  

=== "Java"
    ``` Java 
    ```  

## Problems (0, 0, 0)
