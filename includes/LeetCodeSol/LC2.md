??? Note "LC2. Add Two Numbers (Medium)"
    === "Info"
        - **<a href="https://leetcode-cn.com/problems/add-two-numbers/" target="_blank">LC2. Add Two Numbers (Medium)</a>**
        - Algorithm: Linked List
        - Time Complexity: $O(n)$
        - Space Complexity: $O(1)$

    === "Solution"
        Linked List. The trick is the create a pointer that points to the real head.        
    === "Linked List $O(n)$"
        === "Python"
            ``` Python
            class Solution:
                def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
                    p1 = ListNode()
                    p2 = ListNode()
                    p1.next = l1
                    p2.next = l2
                    
                    carry = 0
                    while p1.next or p2.next:
                        if not p1.next:
                            p1.next = ListNode()
                        if not p2.next:
                            p2.next = ListNode()

                        s = p1.next.val + p2.next.val + carry
                        p1.next.val = s % 10
                        carry = s // 10

                        p1 = p1.next
                        p2 = p2.next

                    if carry:
                        p1.next = ListNode(carry)

                    return l1            
            ```