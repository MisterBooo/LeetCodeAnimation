/// Source : https://leetcode.com/problems/perfect-squares/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

#include <iostream>
#include <vector>

using namespace std;

/// Memory Search
/// Time Complexity: O(n)
/// Space Complexity: O(n)
class Solution {

public:
    int numSquares(int n) {

        vector<int> mem(n + 1, -1);

        return numSquares(n, mem);
    }

private:
    int numSquares(int n, vector<int>& mem){

        if(n == 0)
            return 0;

        if(mem[n] != -1)
            return mem[n];

        int res = INT_MAX;
        for(int i = 1; n - i * i >= 0; i ++ )
            res = min(res, 1 + numSquares(n - i * i, mem));
        return mem[n] = res;
    }
};

int main() {

    cout << Solution().numSquares(12) << endl;
    cout << Solution().numSquares(13) << endl;

    return 0;
}