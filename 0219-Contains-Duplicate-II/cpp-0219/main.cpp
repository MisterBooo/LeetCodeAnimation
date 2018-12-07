/// Source : https://leetcode.com/problems/contains-duplicate-ii/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15

#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

/// Using Hash Set
/// Time Complexity: O(n)
/// Space Complexity: O(k)
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {

        if(nums.size() <= 1)
            return false;

        if(k <= 0)
            return false;

        unordered_set<int> record;
        for(int i = 0 ; i < nums.size() ; i ++){

            if(record.find(nums[i]) != record.end())
                return true;

            record.insert(nums[i]);

            // 保持record中最多有k个元素
            // 因为在下一次循环中会添加一个新元素,使得总共考虑k+1个元素
            if(record.size() == k + 1)
                record.erase(nums[i - k]);
        }

        return false;
    }
};


void printBool(bool b){
    cout << (b ? "True" : "False") << endl;
}

int main() {

    int nums[] = {1, 2, 1};
    vector<int> vec(nums, nums + sizeof(nums)/sizeof(int));
    int k = 1;

    printBool(Solution().containsNearbyDuplicate(vec, k));

    return 0;
}