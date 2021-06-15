# Tree (2)

## Introduction


## Problems (0, 2, 0)
### LC654. Maximum Binary Tree (Medium)
???+ Note "LC654. Maximum Binary Tree (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/maximum-binary-tree/" target="_blank">LC654. Maximum Binary Tree (Medium)</a>**
        - Algorithm: DFS (Recursion)
        - Time Complexity: $O(n)$
        - Space Complexity: $O(1)$
    
    === "Solution"
        This is a standard DFS (Recursion) problem.

    === "DFS O(n)"
        === "Python"
            ``` Python
            class Solution:
                def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
                    if not len(nums):
                        return None
                    
                    maxIdx, maxN = 0, nums[0]
                    for i, n in enumerate(nums):
                        if n > maxN:
                            maxIdx = i
                            maxN = n

                    left = self.constructMaximumBinaryTree(nums[:maxIdx])
                    right = self.constructMaximumBinaryTree(nums[maxIdx+1:])

                    return TreeNode(maxN, left, right)
            ```        

### LC1519. Number of Nodes in the Sub-Tree With the Same Label (Medium)
???+ Note "LC1519. Number of Nodes in the Sub-Tree With the Same Label (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/" target="_blank">LC1519. Number of Nodes in the Sub-Tree With the Same Label (Medium)</a>**
        - Algorithm: 
        - Time Complexity: 
        - Space Complexity: 
    
    === "Solution"        

    === "DFS O(n)"
        === "Python"
            ``` Python            
            ``` 