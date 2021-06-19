/*
 * @Author: Runope
 * @Date: 2021-06-15 19:08:19
 * @LastEditors: Runope
 * @LastEditTime: 2021-06-15 19:21:57
 * @Description: file content
 * @contact: runope@qq.com
 */

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