??? Note "LC4. Median of Two Sorted Arrays (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/" target="_blank">LC4. Median of Two Sorted Arrays (Medium)</a>**
        - Algorithm: Binary Search
        - Time Complexity: $O(\log(n))$
        - Space Complexity: $O(1)$

    === "Solution"
        Binary Search.
    === "Binary Search $O(\log(n))$"
        === "Python"
            ``` Python
            class Solution:
                def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
                    L1 = len(nums1)
                    L2 = len(nums2)

                    if L1 == 1 and L2 == 0:
                        return nums1[0]
                    
                    if L2 == 1 and L1 == 0:
                        return nums2[0]

                    if nums1[L1 // 2] <= nums2[L2 // 2]:
                        return self.findMedianSortedArrays(nums1[L1 // 2:], nums2[:L2 // 2])
                    else:
                        return self.findMedianSortedArrays(nums1[:L1 // 2], nums2[L2 // 2:])           
            ```
    === "Two Pointers $O(n)$"
        === "Python"
            ``` Python
                     
            ```