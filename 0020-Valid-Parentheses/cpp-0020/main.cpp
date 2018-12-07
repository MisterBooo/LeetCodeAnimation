/// Source : https://leetcode.com/problems/valid-parentheses/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

#include <iostream>
#include <stack>
#include <cassert>

using namespace std;

// Using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution {
public:
    bool isValid(string s) {

        stack<char> stack;
        for( int i = 0 ; i < s.size() ; i ++ )
            if( s[i] == '(' || s[i] == '{' || s[i] == '[')
                stack.push(s[i]);
            else{

                if( stack.size() == 0 )
                    return false;

                char c = stack.top();
                stack.pop();

                char match;
                if( s[i] == ')' )
                    match = '(';
                else if( s[i] == ']' )
                    match = '[';
                else{
                    assert( s[i] == '}' );
                    match = '{';
                }

                if(c != match)
                    return false;
            }

        if( stack.size() != 0 )
            return false;

        return true;
    }
};


void printBool(bool res){
    cout << (res ? "True" : "False") << endl;
}

int main() {

    printBool(Solution().isValid("()"));
    printBool(Solution().isValid("()[]{}"));
    printBool(Solution().isValid("(]"));
    printBool(Solution().isValid("([)]"));

    return 0;
}