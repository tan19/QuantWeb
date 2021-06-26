# DFS (4)

## Introduction
DFS searches a tree or graph as far as possible along each branch before backtracking. The time complexity is $O(|V| + |E|)$, where $|V|$ is the number of vertices and $|E|$ the number of edges; and the space complexity is $O(|V|)$. The pseudocode can be written as follows:

=== "Recursive Version"
    ``` Python hl_lines="3 6 9 14"
        # Pseudocode of DFS; recursive version
        def DFS(G, v):
            # 1. LABEL
            label v as VISITED

            # 2. SETUP and INITIALIZE
            setup and initialize

            # 3. DFS and UPDATE
            for w in G.adjacentEdges(v) do:
                if w is not VISITED:
                    DFS(G, w)

            # 4. SUMMARIZE and RETURN                                         
            return

    ```
=== "Non-recursive Version"
    ``` Python hl_lines="8"
        # Pseudocode of DFS; non-recursive version
        def DFS(G):
            Stack.append(root) // root is the starting point
            while Stack:
                v = Stack.pop()
                if v is not VISITED:
                    label v as VISITED
                    // do some work here
                    for w in G.adjacentEdge(v) do:
                        Stack.append(w)

    ```

## Problems
| ID   | Title | Difficulty |
||||
| 695  | Max Area of Island | Medium|
| 200  | Number of Islands | Medium|
| 1254 | Number of Closed Islands | Medium|
| 1034 | Coloring A Border | Medium|

{% include "LC695.md" %}
{% include "LC200.md" %}
{% include "LC1254.md" %}
{% include "LC1034.md" %}


== 基于树的DFS：需要记住递归写前序中序后序遍历二叉树的模板
- LeetCode 543 Diameter of Binary Tree
- LeetCode 226 Invert Binary Tree
- LeetCode 124 Binary Tree Maximum Path Sum
- LeetCode 236 Lowest Common Ancestor of a Binary Tree
- LeetCode 101 Symmetric Tree
- LeetCode 105 Construct Binary Tree from Preorder and Inorder Traversal
- LeetCode 104 Maximum Depth of Binary Tree
- LeetCode 951 Flip Equivalent Binary Trees
- LeetCode 987 Vertical Order Traversal of a Binary Tree
- LeetCode 1485 Clone Binary Tree With Random Pointer
- LeetCode 572 Subtree of Another Tree
- LeetCode 863 All Nodes Distance K in Binary Tree

== 二叉搜索树（BST）：BST特征：中序遍历为单调递增的二叉树，换句话说，根节点的值比左子树任意节点值都大，比右子树任意节点值都小，增删查改均为O（h）复杂度，h为数的高度；注意不是所有的BST题目都需要递归，有的题目只需要while循环即可
- LeetCode 230 Kth Smallest element in a BST
- LeetCode 98 Validate Binary Search Tree
- LeetCode 270 Cloest Binary Search Tree Value
- LeetCode 235 Lowest Common Ancestor of a Binary Search Tree
- LeetCode 669 Trim a Binary Search Tree
- LeetCode 700 Search Range in Binary Search Tree
- LeetCode 108 Convert Sorted Array to Binary Search Tree
- LeetCode 333 Largest BST Subtree
- LeetCode 510 Inorder Successor in BST II

== 基于图的DFS: 和BFS一样一般需要一个set来记录访问过的节点，避免重复访问造成死循环
- LeetCode 341 Flatten Nested List Iterator
- LeetCode 394 Decode String
- LeetCode 51 N-Queens
- LeetCode 291 Word Pattern II (I为简单的Hashmap题)
- LeetCode 126 Word Ladder II （I为BFS题目）
- LeetCode 1110 Delete Nodes And Return Forest
- LeetCode 93 Restore IP Addresses
- LeetCode 22 Generate Parentheses
- LeetCode 37 Sodoku Solver
- LeetCode 301 Remove Invalid Parentheses
- LeetCode 212 Word Search II （I, II）
- LeetCode 1087 Brace Expansion
- LeetCode 399 Evaluate Division
- LeetCode 1274 Number of Ships in a Rectangle
- LeetCode 1376 Time Needed to Inform All Employees
- LeetCode 694 Number of Distinct Islands
- LeetCode 586 Score of Parentheses

== 基于排列组合的DFS: 其实与图类DFS方法一致，但是排列组合的特征更明显
- LeetCode 17 Letter Combinations of a Phone Number
- LeetCode 39 Combination Sum （I, II, III, IV）
- LeetCode 90 Subsets II （重点在于如何去重）
- LeetCode 47 Permutation II
- LeetCode 77 Combinations
- LeetCode 526 Beautiful Arrangement

== 记忆化搜索（DFS + Memoization Search）：算是动态规划的一种，递归每次返回时同时记录下已访问过的节点特征，避免重复访问同一个节点，可以有效的把指数级别的DFS时间复杂度降为多项式级别
- LeetCode 139 Word Break II
- LeetCode 131 Palindrome Partitioning
- LeetCode 72 Edit Distance
- LeetCode 377 Combination Sum IV
- LeetCode 1335 Minimum Difficulty of a Job Schedule