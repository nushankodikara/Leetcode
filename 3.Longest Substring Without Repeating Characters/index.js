/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let currentLen = 0;
    let currentStr = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const index = currentStr.indexOf(char);
        if (index === -1) {
            currentStr += char;
            currentLen++;
        } else {
            currentStr = currentStr.slice(index + 1) + char;
            currentLen = currentStr.length;
        }
        maxLen = Math.max(maxLen, currentLen);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
