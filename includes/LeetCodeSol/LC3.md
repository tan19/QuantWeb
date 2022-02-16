??? Note "LC3. Longest Substring Without Repeating Characters (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/" target="_blank">LC3. Longest Substring Without Repeating Characters (Medium)</a>**
        - Algorithm: DP
        - Time Complexity: $O(n)$
        - Space Complexity: $O(1)$

    === "Solution"
        DP or Two Pointers.
    === "DP $O(n)$"
        === "Python"
            ``` Python
            from collections import defaultdict
            class Solution:
                def lengthOfLongestSubstring(self, s: str) -> int:
                    lastSeen = defaultdict(int)
                    longestDist = 0

                    ans = 0
                    for i, ch in enumerate(s):            
                        longestDist += 1
                        if ch in lastSeen:
                            longestDist = min(longestDist, i - lastSeen[ch])
                        lastSeen[ch] = i

                        ans = max(ans, longestDist)

                    return ans           
            ```
    === "Two Pointers $O(n)$"
        === "Python"
            ``` Python
                     
            ```