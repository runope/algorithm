# [0033] 搜索旋转排序数组

> 整数数组 nums 按升序排列，数组中的值互不相同 。
>
> 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
>
> 给你旋转后的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
>
> 示例 1：
> 
> 输入：nums = [4,5,6,7,0,1,2], target = 0
>
> 输出：4
>
> 示例 2：
>
> 输入：nums = [4,5,6,7,0,1,2], target = 3
>
> 输出：-1
>
> 示例 3：
>
> 输入：nums = [1], target = 0
>
>输出：-1

不难，二分法。一个有序数组从某一点截断重新拼接，那么用中点pivot_index去分割新数组n1，肯定有一段是单调，另一端和n1具有相同的单调性。做的时候把=的可能考虑全，注意细节就OK。
```js
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
```