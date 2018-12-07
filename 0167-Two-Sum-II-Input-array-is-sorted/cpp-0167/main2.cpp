/// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/// Author : liuyubobobo
/// Time   : 2017-11-13

#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

// Binary Search
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {

        assert(numbers.size() >= 2);
        // assert(isSorted(numbers));

        for(int i = 0 ; i < numbers.size() - 1 ; i ++){
            int j = binarySearch(numbers, i+1, numbers.size()-1, target - numbers[i]);
            if(j != -1){
                int res[2] = {i+1, j+1};
                return vector<int>(res, res+2);
            }
        }

        throw invalid_argument("the input has no solution");
    }

private:
    int binarySearch(const vector<int> &nums, int l, int r, int target){

        assert(l >= 0 && l < nums.size());
        assert(r >= 0 && r < nums.size());

        while(l <= r){

            int mid = l + (r - l)/2;
            if(nums[mid] == target)
                return mid;
            if(target > nums[mid])
                l = mid + 1;
            else
                r = mid - 1;
        }

        return -1;
    }

    bool isSorted(const vector<int>& numbers){
        for(int i = 1 ; i < numbers.size() ; i ++)
            if(numbers[i] < numbers[i-1])
                return false;
        return true;
    }
};

void printVec(const vector<int>& vec){
    for(int e: vec)
        cout << e << " ";
    cout << endl;
}

int main() {

    int nums[] = {2, 7, 11, 15};
    vector<int> vec(nums, nums + sizeof(nums) / sizeof(int));
    int target = 9;
    printVec(Solution().twoSum(vec, target));

    return 0;
}