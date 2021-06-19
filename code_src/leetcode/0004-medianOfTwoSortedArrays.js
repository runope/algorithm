/*
 * @Author: Runope
 * @Date: 2021-06-17 14:14:09
 * @LastEditors: Runope
 * @LastEditTime: 2021-06-17 16:23:52
 * @Description: file content
 * @contact: runope@qq.com
 */
/**
 * 使用二分，时间复杂度O(log(m+n))，空间复杂度O(1)
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const lenght1 = nums1.length, length2 = nums2.length
    const totalLength = lenght1 + length2
    if (1 == totalLength % 2) {
        let midIndex = Math.floor(totalLength / 2)
        let median = getKthElement(nums1, nums2, midIndex + 1)
        return median
    } else {
        let midIndex1 = Math.floor(totalLength / 2) - 1, midIndex2 = Math.floor(totalLength / 2)
        let median = (getKthElement(nums1, nums2, midIndex1 + 1) + getKthElement(nums1, nums2, midIndex2 + 1)) / 2
        return median 
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var getKthElement = (nums1, nums2, k) => {
    const length1 = nums1.length, length2 = nums2.length
    let index1 = 0, index2 = 0
    while(true) {
        if(index1 == length1) {
            return nums2[index2 + k - 1]
        }
        if(index2 == length2) {
            return nums1[index1 + k - 1]
        }
        if(1 == k) {
            return Math.min(nums1[index1], nums2[index2])
        }

        let half = Math.floor(k / 2)
        let newIndex1 = Math.min(index1 + half, length1) - 1
        let newIndex2 = Math.min(index2 + half, length2) - 1
        let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]
        if(pivot1 <= pivot2) {
            k -= newIndex1 - index1 + 1
            index1 = newIndex1 + 1
        }else{
            k -= newIndex2 - index2 + 1
            index2 = newIndex2 + 1
        }
    }
}

console.log(findMedianSortedArrays([1,3], [2]))