/// Source : https://leetcode.com/problems/reverse-string/description/
/// Author : liuyubobobo
/// Time   : 2018-06-04

#include <iostream>

using namespace std;

// 344. Reverse String
// https://leetcode.com/problems/reverse-string/description/
// Two Pointers
// 时间复杂度: O(n)
// 空间复杂度: O(1)
class Solution {
public:
    string reverseString(string s) {

        int i = 0, j = s.size() - 1;
        while(i < j){
            swap(s[i], s[j]);
            i ++;
            j --;
        }

        return s;
    }
};


int main() {

    cout << Solution().reverseString("hello") << endl;

    return 0;
}
