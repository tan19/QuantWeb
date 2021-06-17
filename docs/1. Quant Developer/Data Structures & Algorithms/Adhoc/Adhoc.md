# Adhoc (1)

## Introduction
Adhoc problems.


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