class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {


  const n1 = s1.length;
  const n2 = s2.length;
  if (n1 > n2) return false;


  const need = Array(26).fill(0);
  const window = Array(26).fill(0);

  const idx = (ch) => ch.charCodeAt(0) - 97; 

  for (const ch of s1) need[idx(ch)]++;

  let matches = 0; 
  for (let i = 0; i < 26; i++) {
    if (need[i] === 0) matches++; 
  }

 
  for (let right = 0; right < n2; right++) {
    const addIdx = idx(s2[right]);
    window[addIdx]++;

    
    if (window[addIdx] === need[addIdx]) matches++;
    else if (window[addIdx] === need[addIdx] + 1) matches--; 

   
    if (right >= n1) {
      const leftIdx = idx(s2[right - n1]);
      window[leftIdx]--;
      if (window[leftIdx] === need[leftIdx]) matches++;
      else if (window[leftIdx] === need[leftIdx] - 1) matches--; 
    }

   
    if (matches === 26) return true;
  }

  return false;
}


    }

