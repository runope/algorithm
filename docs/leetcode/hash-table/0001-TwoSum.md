# [0001] 两数之和

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target  的那两个整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。
> 示例:
>
> 给定 nums = [2, 7, 11, 15], target = 9
>
> 因为 nums[0] + nums[1] = 2 + 7 = 9，所以返回 [0, 1]


用空间换时间的方式来把时间复杂度降到O(n)

题目中，首先每种输入只有一个答案，并且同一元素不会重复出现基本可以想到hash表，在hash表中，我们把值作为索引，把索引作为值，判断是否存在target - nums[i]这个key
```JavaScript
/*
 * 题目中，首先每种输入只有一个答案，并且同一元素不会重复出现
 * 基本可以想到hash表，在hash表中，我们把值作为索引，把索引作为值
 * 判断是否存在target - nums[i]这个key
 * /
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    const map = {}
    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }
};
```