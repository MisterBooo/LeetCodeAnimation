
class Solution {
    public int numJewelsInStones(String J, String S) {
        Set<Character> Jset = new HashSet();
        for (char j: J.toCharArray())
            Jset.add(j);

        int ans = 0;
        for (char s: S.toCharArray())
            if (Jset.contains(s))
                ans++;
        return ans;
    }
}