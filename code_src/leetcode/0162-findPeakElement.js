// Solution number one, time O(n)
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
//     let nums_length = nums.length, index = 0
//     while(index < nums.length - 1){
//         if(nums[index] > nums[index + 1]) return index
//         index++
//     }
//     return nums.length-1
// };

// /** 
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function(nums) {
//     let left = 0, right = nums.length - 1, pivot_index = 0

//     while(left<right) {
//         pivot_index = parseInt((left + right)/2)

//         if(nums[pivot_index] > nums[pivot_index+1]) right = pivot_index
//         else left = pivot_index + 1
//     }
//     return left
// };
