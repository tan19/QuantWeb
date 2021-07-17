# Index

Algorithm design is mainly about **how to reduce problem size and to avoid repetitive computation**. The search part of the algorithm is usually DFS (Depth First Search), through recursive function calls or stack simulation; or BFS (Breadth First Search), through for and while loops or simulated by a queue. These two are often exchangeable and are a trivial decision once the algorithm design is done.

The algorithm design can be seen as to search in a **data structure**, which can be visualized as a graph, where

- each node represents a state of the problem, and 
- each edge represents available moves between nodes.

A problem solver carries a package full of accumulated auxiliary **info** and use the **algorithm** to search in the mist of the problem space.

Common Preprocessing Tricks

- Sort

Common avoid repetitive computation tricks:

- PreSum
- PreHash
- DP, calculate on-the-fly and as needed