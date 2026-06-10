class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashMap[] row = new HashMap[9];
        HashMap[] column = new HashMap[9];
        HashMap[] box = new HashMap[9];
        for (int i = 0; i < 9; i++) {
            row[i] = new HashMap(9);
            column[i] = new HashMap(9);
            box[i] = new HashMap(9);
        }
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    continue;
                }
                int boxIndex=i / 3 * 3 + j / 3;
                if ((boolean) row[i].getOrDefault(board[i][j], true)) {
                    return false;
                }
                if ((boolean) column[j].getOrDefault(board[i][j], true)) {
                    return false;
                }
                if ((boolean) box[boxIndex].getOrDefault(board[i][j], true)) {
                    return false;
                }
                row[i].put(board[i][j], false);
                column[j].put(board[i][j], false);
                box[boxIndex].put(board[i][j], false);
            }
        }

        return true;
	}
}