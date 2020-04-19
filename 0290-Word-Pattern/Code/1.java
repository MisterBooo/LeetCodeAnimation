class Solution {
    public boolean wordPattern(String pattern, String str) {
        HashMap<Character, String> map = new HashMap<>();
        HashSet<String> set = new HashSet<>();
        String[] array = str.split(" ");

        if (pattern.length() != array.length) {
            return false;
        }
        for (int i = 0; i < pattern.length(); i++) {
            char key = pattern.charAt(i);
            if (!map.containsKey(key)) {
                if (set.contains(array[i])) {
                    return false;
                }
                map.put(key, array[i]);
                set.add(array[i]);
            } else {
                if (!map.get(key).equals(array[i])) {
                    return false;
                }
            }
        }
        return true;
    }
}