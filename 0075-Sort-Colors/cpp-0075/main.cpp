/// Source : https://leetcode.com/problems/sort-colors/description/
/// Author : liuyubobobo
/// Time   : 2017-11-13

#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

// Counting
// Time Complexity: O(n)
// Space Complexity: O(3)
class Solution {
public:
    void sortColors(vector<int> &nums) {

        int count[3] = {0};
        for(int i = 0 ; i < nums.size() ; i ++){
            assert(nums[i] >= 0 && nums[i] <= 2);
            count[nums[i]] ++;
        }

        int index = 0;
        for(int i = 0 ; i < count[0] ; i ++)
            nums[index++] = 0;
        for(int i = 0 ; i < count[1] ; i ++)
            nums[index++] = 1;
        for(int i = 0 ; i < count[2] ; i ++)
            nums[index++] = 2;
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
