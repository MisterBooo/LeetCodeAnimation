/// Source : https://leetcode.com/problems/sort-colors/description/
/// Author : liuyubobobo
/// Time   : 2017-11-13

#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

// Three Way Quick Sort
// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution {
public:
    void sortColors(vector<int> &nums) {

        int zero = -1;          // [0...zero] == 0
        int two = nums.size();  // [two...n-1] == 2
        for(int i = 0 ; i < two ; ){
            if(nums[i] == 1)
                i ++;
            else if (nums[i] == 2)
                swap( nums[i] , nums[--two]);
            else{ // nums[i] == 0
                assert(nums[i] == 0);
                swap(nums[++zero] , nums[i++]);
            }
        }
    }
};


void printArr(const vector<int>& vec){
    for(int e: vec)
        cout << e << " ";
    cout << endl;
}

int main() {

    vector<int> vec1 = {2, 2, 2, 1, 1, 0};
    Solution().sortColors(vec1);
    printArr(vec1);

    vector<int> vec2 = {2};
    Solution().sortColors(vec2);
    printArr(vec2);

    return 0;
}
