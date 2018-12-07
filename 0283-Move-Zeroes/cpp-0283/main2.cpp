/// Source : https://leetcode.com/problems/move-zeroes/description/
/// Author : liuyubobobo
/// Time   : 2017-02-09

#include <iostream>
#include <vector>

using namespace std;

// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {
public:
    void moveZeroes(vector<int>& nums) {

        int k = 0; // keep nums[0...k) are all zero elements
        for(int i = 0 ; i < nums.size() ; i ++ )
            if(nums[i])
                nums[k++] = nums[i];

        // make the nums[k...end) zeros
        for(int i = k ; i < nums.size() ; i ++)
            nums[i] = 0;
    }
};


void printVec(const vector<int>& vec){
    for(int e: vec)
        cout << e << " ";
    cout << endl;
}

int main() {

    int arr[] = {0, 1, 0, 3, 12};
    vector<int> vec(arr, arr + sizeof(arr) / sizeof(int));
    Solution().moveZeroes(vec);
    printVec(vec);

    return 0;
}