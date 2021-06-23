/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let nums_length = nums.length
    let left = 0, right = nums_length - 1

    if(nums_length == 1) return nums[0] == target? 0 : -1
    

    while(left <= right) {
        let pivot_index = parseInt((left + right)/2)
        if(nums[pivot_index] == target) return pivot_index;  
        
        if(nums[0] > nums[pivot_index]) {   
            // nums[0] > nums[pivot_index]那么数组右半部分是有序的，我们先考虑落在右半部分的情况
            // 要注意每次判断时，要把>、<、=三种情况都覆盖到
            if (nums[pivot_index] < target && nums[right] >= target) left = pivot_index + 1
            else right = pivot_index - 1
        }else {
            if(nums[pivot_index] > target && nums[left] <= target) right = pivot_index - 1
            else left = pivot_index + 1
        }
    }
    return -1
};