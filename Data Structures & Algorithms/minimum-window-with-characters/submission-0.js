class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = {};
        const window = {};

        for (let ch of t) {
            need[ch] = (need[ch] || 0) + 1;
        }

        let have = 0;
        let needCount = Object.keys(need).length;

        let left = 0;
        let start = 0;
        let minLen = Infinity;

        for (let right = 0; right < s.length; right++) {
            let ch = s[right];
            window[ch] = (window[ch] || 0) + 1;

            if (need[ch] && window[ch] === need[ch]) {
                have++;
            }

            while (have === needCount) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                let leftChar = s[left];
                window[leftChar]--;

                if (need[leftChar] && window[leftChar] < need[leftChar]) {
                    have--;
                }

                left++;
            }
        }

        return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}