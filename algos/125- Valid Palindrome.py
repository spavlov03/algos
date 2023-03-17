# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        x = s.lower().replace(" ","")
        y = re.sub(r'[^a-zA-Z0-9]', '',x)
        print(y)
        last = (len(y)-1)
        for letter in range(0,len(y)): 
            if y[letter] == y[last]:
                last-=1
            else:
                return False
        return True 
