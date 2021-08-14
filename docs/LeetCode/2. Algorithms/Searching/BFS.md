# BFS (3)

## Introduction
BFS searches a tree or graph by level or distance. The time complexity is $O(|V| + |E|)$, where $|V|$ is the number of vertices and $|E|$ the number of edges; and the space complexity is $O(|V|)$. The pseudocode can be written as follows:

=== "When Level does not Matter"
    ``` Python
        # Pseudocode of BFS; level not matter
        while queue:
            cur = queue.pop()
            visited[cur] = True
            for node in neighbors(cur):
                if node is both valid and unvisited:
                    queue.append(node)

    ```
=== "When Level Matters"
    ``` Python
        # Pseudocode of BFS; level matters
        level = 0
        while queue:
            size = len(queue)
            for i in range(size):
                cur = queue.pop()
                visited[cur] = True
                for node in neighbors(cur):
                    if node is both valid and unvisited:
                        queue.append(node)
        level += 1
    ```

## Problems
| ID   | Title | Difficulty |
||||
| 542   | 01 Matrix | Medium|
| 1162  | As Far from Land as Possible | Medium|
| 994  | Rotting Oranges | Medium|


{% include "LeetCodeSol/LC542.md" %}
{% include "LeetCodeSol/LC1162.md" %}
{% include "LeetCodeSol/LC994.md" %}


# 基础知识：

常见的BFS用来解决什么问题？(1) 简单图（有向无向皆可）的最短路径长度（2）拓扑排序 （3） 遍历一个图（或者树）
BFS基本模板（需要记录层数或者不需要记录层数）
多数情况下时间复杂度空间复杂度都是O（N+M），N为节点个数，M为边的个数

# 基于树的BFS：不需要专门一个set来记录访问过的节点

- Leetcode 102 Binary Tree Level Order Traversal
- Leetcode 103 Binary Tree Zigzag Level Order Traversal
- Leetcode 297 Serialize and Deserialize Binary Tree （很好的BFS和双指针结合的题）
- Leetcode 374 Binary Tree Vertical Order Traversal

# 基于图的BFS：（一般需要一个set来记录访问过的节点）

- Leetcode 200. Number of Islands
- Leetcode 133. Clone Graph
- Leetcode 127. Word Ladder
- Leetcode 490. The Maze
- Leetcode 323. Connected Component in Undirected Graph
- Leetcode 130. Surrounded Regions
- Leetcode 752. Open the Lock
- Leetcode 815. Bus Routes
- Leetcode 1091. Shortest Path in Binary Matrix
- Leetcode 1293. Shortest Path in a Grid with Obstacles Elimination

# 拓扑排序:

- Leetcode 207 Course Schedule （I, II）
- Leetcode 444 Sequence Reconstruction
- Leetcode 269 Alien Dictionary