# Tree (2)

## Introduction

题目分类	题目编号
树与递归	100、222、101、226、437、563、617、508、572、543、654、687、87
树的层次遍历	102、429、690、559、662、671、513、515、637、103、107、257、623、653、104、111、112、113、129、404、199、655、116、117
树的前序遍历	144、589
树的前序序列化	606、331、652、297、449
树的后序遍历	145、590
树的中序遍历与二叉搜索树	94、700、530、538、230、98、173、669、450、110、95、108、109
重构二叉树	105、106
二叉树的展开	114
最近公共祖先	235、236
Morris中序遍历	501、99
四叉树	558、427

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