/// Source : https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/// Author : liuyubobobo
/// Time   : 2018-08-29

#include <iostream>
#include <stack>
#include <vector>

using namespace std;


/// Two stacks
/// Time Complexity: O(n)
/// Space Complexity: O(n)
class Solution {
public:
    int evalRPN(vector<string>& tokens) {

        stack<int> nums;
        stack<char> ops;
        for(const string& s: tokens){
            if(s == "+" || s == "-" || s == "*" || s == "/"){
                int a = nums.top();
                nums.pop();
                int b = nums.top();
                nums.pop();

                if(s == "+"){
                    nums.push(b + a);
                }else if(s == "-"){
                    nums.push(b - a);
                } else if(s == "*"){
                    nums.push(b * a);
                }else if(s == "/"){
                    nums.push(b / a);
                }
            }
            else{
                nums.push(atoi(s.c_str()));
            }
        }
        return nums.top();
    }
};


int main() {

    return 0;
}
