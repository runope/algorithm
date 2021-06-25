/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let nums_length = nums.length
    let left = 0, right = nums_length - 1

    if(nums_length===1) return nums[0]==target?[0,0]:[-1,-1]

    let pivot_index = 0, ans_left = 0, ans_right = 0

    while(left <= right) {
        pivot_index = parseInt((left + right)/2)

        if(nums[pivot_index] === target) {
            ans_left = pivot_index
            ans_right = pivot_index
            while(nums[ans_left] === target) {
                ans_left--
            }
            while(nums[ans_right] === target) {
                ans_right++
            }
            return [ans_left + 1, ans_right - 1]
        }
        else if(nums[pivot_index] < target) left = pivot_index + 1
        else right = pivot_index - 1
    }

    return [-1, -1]
};
