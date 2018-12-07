/// https://leetcode.com/problems/4sum-ii/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15

#include <iostream>
#include <vector>
#include <unordered_map>
#include <cassert>
#include <stdexcept>

using namespace std;

/// Another Way to use Hash Map
/// Time Complexity: O(n^2)
/// Space Complexity: O(n^2)
class Solution {
public:
    int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {

        unordered_map<int,int> hashtable1;
        unordered_map<int,int> hashtable2;

        for(int i = 0 ; i < A.size() ; i ++)
            for(int j = 0 ; j < B.size() ; j ++)
                hashtable1[A[i]+B[j]] += 1;

        for(int i = 0 ; i < C.size() ; i ++)
            for(int j = 0 ; j < D.size() ; j ++)
                hashtable2[C[i]+D[j]] += 1;

        int res = 0;
        for(unordered_map<int,int>::iterator iter = hashtable1.begin() ; iter != hashtable1.end() ; iter ++)
            if(hashtable2.find(-(iter->first)) != hashtable2.end())
                res += iter->second * hashtable2[-(iter->first)];

        return res;
    }
};

int main() {

    int a[] = {1, 2};
    int b[] = {-2, -1};
    int c[] = {-1, 2};
    int d[] = {0, 2};
    vector<int> a_vec = vector<int>(a, a + sizeof(a)/sizeof(int));
    vector<int> b_vec = vector<int>(b, b + sizeof(b)/sizeof(int));
    vector<int> c_vec = vector<int>(c, c + sizeof(c)/sizeof(int));
    vector<int> d_vec = vector<int>(d, d + sizeof(d)/sizeof(int));

    cout << Solution().fourSumCount(a_vec, b_vec, c_vec, d_vec) << endl;

    return 0;
}

