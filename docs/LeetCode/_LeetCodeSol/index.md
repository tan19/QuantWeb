---
hide:
    - navigation    
---
# Index

Algorithm design is mainly about **how to reduce problem size and to avoid repetitive computation**. The search part of the algorithm is usually DFS (Depth First Search), through recursive function calls or stack simulation; or BFS (Breadth First Search), through for and while loops or simulated by a queue. These two are often exchangeable and are a trivial decision once the algorithm design is done.

The algorithm design can be seen as to search in a **data structure**, which can be visualized as a graph, where

- each node represents a state of the problem, and 
- each edge represents available moves between nodes.

A problem solver carries a package full of accumulated auxiliary **info** and use the **algorithm** to search in the mist of the problem space.

Common Preprocessing Tricks

- Sort
- PreSum


## Problems (13)
### Binary Search (4)
| Problem | Type | Info | Data Structure | Algorithm |
||||||
| [LC1011. Capacity To Ship Packages Within D Days](LC1011) | 1D Structured FindOne | No | Checker | Binary Search |
| [LC1642. Furthest Building You Can Reach](LC1642) | 1D Structured FindOne | No | Checker | Binary Search |
| [LC704. Binary Search](LC704) | 1D Structured FindOne | No | No | Binary Search |
| [LC34. Find First and Last Position of Element in Sorted Array](LC34) | 1D Structured FindOne | No | No | Binary Search |

### Two Sum (4)
| Problem | Type | Info | Data Structure | Algorithm |
||||||
| [LC1. Two Sum](LC1) | 1D Structured FindAll | Sort | No | Two Pointers |
| [LC523. Continuous Subarray Sum](LC523) | 1D Structured FindOne | PreSum | No | No |
| [LC560. Subarray Sum Equals K](LC560) | 1D Structured FindAll | PreSum | No | No |
| [LC713. Subarray Product Less Than K](LC713) | 1D Structured FindAll | PreSum | No | No |


### DFS (5)
| Problem | Type | Preprocess | Info | Data Structure | Algorithm |
|||||||
| [LC46. Permutations](LC46) | 1D Structured FindAll | No | No | No | DFS |
| [LC695. Max Area of Island](LC695) | 2D Unstructured FindAll | No | State | No | DFS |
| [LC200. Number of Islands](LC200) | 2D Unstructured FindAll | No | State | No | DFS |
| [LC1254. Number of Closed Islands](LC1254) | 2D Unstructured FindAll | No | State | No | DFS |
| [LC1034. Coloring A Border](LC1034) | 2D UnStructured FindAll | No | State| No | DFS |