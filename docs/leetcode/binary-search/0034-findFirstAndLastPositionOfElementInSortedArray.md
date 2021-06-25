# [0034] 在排序数组中查找元素的第一个和最后一个位置

> 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
> 
> 如果数组中不存在目标值 target，返回 [-1, -1]。
>
> 进阶：
>
> 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
>
> 示例 1：
>
> 输入：nums = [5,7,7,8,8,10], target = 8
>
> 输出：[3,4]
>
>示例 2：
>
>输入：nums = [5,7,7,8,8,10], target = 6
>
>输出：[-1,-1]
>
>示例 3：
>
>输入：nums = [], target = 0
>
>输出：[-1,-1]


常规的二分法，二分法有一个技巧要记得，
第一，二分时，left=pivot_index+1,right=pivot_index-1,这样不仅是为了少比较一个数，更重要的是直接left=pivot_index或者right=pivot_index在只剩下两个元素时会造成死循环
第二，使用了left=pivot_index+1,right=pivot_index-1之后相应的判断是需要变为left<=right
其他的没什么好说的。
```js
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
```