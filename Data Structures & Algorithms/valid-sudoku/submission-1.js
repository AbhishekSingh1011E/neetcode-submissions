class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let row = {};
    let col = {};
    let boxes ={}
    for(let r =0; r<9;r++) {
        for(let c = 0; c<9;c++) {
             let value = board[r][c];
             if(value === ".")
                continue
            let boxkey = Math.floor(r/3) + "-" + Math.floor(c/3)
            if(row[r]?.has(value))
                return false
            if(col[c]?.has(value))
                return false
            if(boxes[boxkey]?.has(value))
                return false
            if(!row[r]) row[r] = new Set();
            if(!col[c]) col[c] = new Set();
            if(!boxes[boxkey]) boxes[boxkey]= new Set();
            row[r].add(value);
            col[c].add(value);
            boxes[boxkey].add(value);

        }
    }
    return true
    }
}
