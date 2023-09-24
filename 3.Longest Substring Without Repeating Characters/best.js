/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // to get length, we need left point and right point, at the beginning both = 0
    // iterate each char in the string, moving to the right, set right as the moving index
    // remember index of char
    // if found the duplicated char, get remembered index
    // comapre remembered index + 1 and left point, whoever larger, set as new Left point
    // get length by using right point - left point +1, compare with prevs maxlength
    // if larger, update the maxlength
    // update the index of the char

    let maxlength = 0;
    let left = 0;
    let right = 0;
    let charMap = new Map();

    while (right < s.length) {
        const char = s[right];
        if (charMap.has(char)) {
            left = Math.max(left, charMap.get(char) + 1);
        }
        charMap.set(char, right);

        const length = right - left + 1;

        maxlength = Math.max(maxlength, length);

        right++;
    }

    return maxlength;
};
