class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
            let result = ""
            for(let str of strs) {
                let i = 0
                result += str.length + "#" + str

            }
            return result

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let result = [];
        let i = 0;

        while (i < s.length) {
            
            let j = i;
            while (s[j] !== "#") {
                j++;
            }

            let length = Number(s.substring(i, j)); 
            j++; // '#' skip

            
            let word = s.substring(j, j + length);
            result.push(word);

            
            i = j + length;
        }

        return result;
    }
}
