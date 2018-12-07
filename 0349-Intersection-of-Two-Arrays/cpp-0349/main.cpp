/// Source : https://leetcode.com/problems/intersection-of-two-arrays/description/
/// Author : liuyubobobo
/// Time   : 2017-07-12

#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

/// Hash Set
/// Time complexity: O(len(nums1) + len(nums2))
/// Space Complexity: O(len(nums1))
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {

        unordered_set<int> record(nums1.begin(), nums1.end());

        unordered_set<int> resultSet;
        for( int i = 0 ; i < nums2.size() ; i ++ )
            if( record.find(nums2[i]) != record.end() )
                resultSet.insert( nums2[i] );

        return vector<int>(resultSet.begin(), resultSet.end());
    }
};


void printVec(const vector<int>& vec){
    for(int e: vec)
        cout << e << " ";
    cout << endl;
}

int main() {

    int nums1[] = {1, 2, 2, 1};
    vector<int> vec1(nums1, nums1 + sizeof(nums1)/sizeof(int));

    int nums2[] = {2, 2};
    vector<int> vec2(nums2, nums2 + sizeof(nums2)/sizeof(int));

    printVec(Solution().intersection(vec1, vec2));

    return 0;
}