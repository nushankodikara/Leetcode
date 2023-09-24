/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const array = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = array.length;
    if (len % 2 === 0) {
        return (array[len / 2] + array[len / 2 - 1]) / 2;
    } else {
        return array[(len - 1) / 2];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
