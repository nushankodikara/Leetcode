/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let zigzag = [];
    let row = 1;
    let ind = 0;
    for (let i = 0; i < numRows; i++) {
        zigzag.push([]);
    }
    for (i in s) {
        if (row === numRows && numRows != 1) ind = -1;
        if (row === 1 && numRows != 1) ind = +1;
        zigzag[row - 1].push(s[i]);
        row += ind;
    }
    zigzag = zigzag.map((row) => row.join(""));
    return zigzag.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("AB", 1));
