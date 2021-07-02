// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArray = function(nums) {
//     nums.sort((a, b) => {return a - b})
//     return nums
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const qsort = arr => arr.length <= 1? arr: 
        qsort(arr.filter(x => x < arr[0]))
        .concat(arr.filter(x => x == arr[0]))
        .concat(qsort(arr.filter(x => x > arr[0])))
    qsort(nums)
    return nums
};

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var sortArray = function(nums) {

// };

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var sortArray = function(nums) {

// };