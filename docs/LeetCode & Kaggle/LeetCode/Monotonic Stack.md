# Monotonic Stack (0)

## Introduction
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
