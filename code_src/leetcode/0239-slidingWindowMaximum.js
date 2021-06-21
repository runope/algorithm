/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
    const nums_length = nums.length
    const windows_queue = []

    for (let i = 0; i < k; i++) {
        while (windows_queue.length && nums[i] >= nums[windows_queue[windows_queue.length - 1]]) {
            windows_queue.pop()
        }
        windows_queue.push(i)
    }

    const ans = [nums[windows_queue[0]]]
    for (let i = k; i < nums_length; i++) {
        while (windows_queue.length && nums[i] >= nums[windows_queue[windows_queue.length - 1]]) {
            windows_queue.pop()
        }

        if(i - windows_queue[0] >= k){
            windows_queue.shift()
        }
        windows_queue.push(i)
        ans.push(nums[windows_queue[0]])
    }

    return ans
};

