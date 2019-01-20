/// Source : https://leetcode.com/problems/perfect-squares/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

#include <iostream>
#include <vector>

using namespace std;

/// Dynamic Programming
/// Time Complexity: O(n)
/// Space Complexity: O(n)
class Solution {

public:
    int numSquares(int n) {

        vector<int> mem(n + 1, INT_MAX);
        mem[0] = 0;
        for(int i = 1; i <= n ; i ++)
            for(int j = 1 ; i - j * j >= 0 ; j ++)
                mem[i] = min(mem[i], 1 + mem[i - j * j]);

        return mem[n];
    }
};

int main() {

    cout << Solution().numSquares(12) << endl;
    cout << Solution().numSquares(13) << endl;

    return 0;
}