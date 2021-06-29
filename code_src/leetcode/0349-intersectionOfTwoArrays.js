/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Set = new Set(nums1)
    return Array.from(new Set(nums2.filter(ele => nums1Set.has(ele))))
};