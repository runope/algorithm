# [0004] 寻找两个有序数组的中位数

>给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
>
>请你找出并返回这两个正序数组的中位数 ，要求算法的时间复杂度为 O(log(m + n))。
>
>示例 1:
>
>nums1 = [1, 3]
>
>nums2 = [2]
>
>输出 2.0
>
>示例 2:
>
>nums1 = [1, 2]
>
>nums2 = [3, 4]
>
>输出 (2 + 3)/2 = 2.5

不考虑时间和空间复杂度的话直接使用归并排序就可以了。

这道题要求时间复杂度是log级别，及时基本锁定了使用二分法的思路

这里我直接使用指针记录序号，空间在O(1)，然后采用二分法，时间复杂度为O(log(m+n))

其实思路很简单，就是一半的一半，第一个一半是指中位数的一半，也就是(m+n)/2，第二个一半是指两个数组分别取(m+n)/2的一半，由于两个数组都是从小到大，所以两个数组index处值小的，那么它的前半部分一定是要被去掉的。因为相当于两个有序数组{x[n/2] < y[n/2]}，分别先取n/2个，在总的n个数中，x[n/2] < y[n/2]，那么x[n/2]肯定比y[n/2]和x[n/2]后面的值小，所以x[0]~x[n/2]肯定在两个数组合并排序后的前n个,不是我们需要的值，需要被删除

用JavaScript实现其实还要个要注意的地方，因为JavaScript中的number基本类型默认是用浮点数的形式存储，所以我们取整时要借助Math.floor()函数，代码如下
```JavaScript
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

/** 取第k小
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
```
