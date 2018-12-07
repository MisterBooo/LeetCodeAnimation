/// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/// Author : liuyubobobo
/// Time   : 2016-12-06


#include <iostream>
#include <vector>
#include <cassert>
#include <stdexcept>

using namespace std;

/// Two pointers
/// Time Complexity:  O(n)
/// Space Complexity: O(1)
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {

        if(nums.size() == 0)
            return 0;

        int res = 1;
        int index = nextDifferentCharacterIndex(nums, 1);
        int i = 1;
        while(index < nums.size()){
            res ++;
            nums[i++] = nums[index];
            index = nextDifferentCharacterIndex(nums, index + 1);
        }

        return res;
    }

private:
    int nextDifferentCharacterIndex(const vector<int> &nums, int p){
        for( ; p < nums.size() ; p ++ )
            if( nums[p] != nums[p - 1] )
                break;
        return p;
    }
};


int main() {

    vector<int> nums1 = {1, 1, 2};
    cout << Solution().removeDuplicates(nums1) << endl;

    return 0;
}