# Subarray and Subsequence (6)
It is oftentimes prohibitively costly to check **all** subarrays, which is of order $O(n^2)$, not to mention all subsequences, which is of order $O(2^n)$. Thus, the common algorithm for this type of problem is to use a **structured DP** scheme, that is, 

- the problem is solved **on-the-fly** in a DP fashion, and
- the **carry-on info** is intentionally structured.

NB: **Subarrays** are continuous while **subsequences** can be *broken*.

## Level I. Track a Single Number for `DP[i-1]`
In <a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank">LC53. Maximum Subarray (Easy)</a>, the problem asks for the **largest subarray sum**.

The trick for this type of problem is to keep **the best info**.

## Level II. Track a Hash Table for ``DP[i-1]``
<span style="color:green">In the previous example, we can keep just the best piece of information because the problem imposes a </span><span style="color:red">**greedy constraint**</span><span style="color:green">, meaning the solution of the current step must come from </span><span style="color:red">**the solution of the previous step.**</span><span style="color:green">
</span>

However, some problems have multiple solutions at each step. For example,
- <a href="https://leetcode-cn.com/problems/subarray-sum-equals-k/" target="_blank">LC560. Subarray Sum Equals K (Medium)</a> asks us to find all subarrays that **sum to $k$**;
- <a href="https://leetcode-cn.com/problems/continuous-subarray-sum/" target="_blank">LC523. Continuous Subarray Sum (Medium)</a> asks us to find any subarray that **sum to a multiple of $k$**;
- <a href="https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/" target="_blank">LC974. Subarray Sums Divisible by K (Medium)</a> asks us to find any subarray that whose **sum is divisible by $k$**.
- <a href="https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays/" target="_blank">LC1031. Maximum Sum of Two Non-Overlapping Subarrays (Medium)</a> asks us to find the best pair of subarrays **whose lengths are pre-specified**.

These problems are very similar if not identical, especially that all problems impose some **equality constraint**. The problem is no longer **what** one single piece of information we should keep, but **how** to keep and use the full spectrum of information efficiently.

The trick for this type of problem is to keep **a hash table of info**.

## Level III. Track a Sorted Array for `DP[0:i]` each with a Single Number
<span style="color:green">In the previous examples, we can track a hash table of information because the problem imposes an </span><span style="color:red">**equality constraint**</span><span style="color:green">, meaning the solution of the current step must come from </span><span style="color:red">**one of the solutions from previous steps.**</span><span style="color:green">
</span>

However, as in <a href="https://leetcode-cn.com/problems/subarray-product-less-than-k/" target="_blank">LC713. Subarray Product Less Than K (Medium)</a>, where we are asked to find all subarrays whose product is **less than $k$**, and in <a href="https://leetcode-cn.com/problems/increasing-subsequences/" target="_blank">LC491. Increasing Subsequences (Medium)</a>, where we are asked to find all non-decreasing **subsequences**.

The trick for this type of problem is to keep **a sorted array of info**.

## Related Problems

| Problem | Type | Info | Data Structure | Algorithm |
||||||
| [LC53. Maximum Subarray](../../_LeetCodeSol/LC53) | 1D Structured FindAll | No | No | DP |
| [LC560. Subarray Sum Equals K](../../_LeetCodeSol/LC560) | 1D Structured FindAll | No | No | DP |
| [LC523. Subarray Sums Divisible by K](../../_LeetCodeSol/LC523) | 1D Structured FindAll | No | No | DP |
| [LC974. Subarray Sums Divisible by K](../../_LeetCodeSol/LC974) | 1D Structured FindAll | No | No | DP |
| [LC491. Increasing Subsequences](../../_LeetCodeSol/LC491) | 1D Structured FindAll | No | No | DP |
| [LC1031. Maximum Sum of Two Non-Overlapping Subarrays](../../_LeetCodeSol/LC1031) | 1D Structured FindAll | No | No | DP |
