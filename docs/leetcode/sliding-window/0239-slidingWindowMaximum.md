# [0239] 滑动窗口最大值

> 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
>
>返回滑动窗口中的最大值。
>
> 示例 1：
>
> 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
>
> 输出：[3,3,5,5,6,7]
>
> 解释：
>
> 滑动窗口的位置                最大值
>
> ---------------               -----
>
> [1  3  -1] -3  5  3  6  7       3
>
>  1 [3  -1  -3] 5  3  6  7       3
>
>  1  3 [-1  -3  5] 3  6  7       5
>
>  1  3  -1 [-3  5  3] 6  7       5
>
>  1  3  -1  -3 [5  3  6] 7       6
>
>  1  3  -1  -3  5 [3  6  7]      7
>
> 示例 2：
>
> 输入：nums = [1], k = 1
>
> 输出：[1]
>
> 示例 3：
>
> 输入：nums = [1,-1], k = 1
>
> 输出：[1,-1]
>
> 示例 4：
>
> 输入：nums = [9,11], k = 2
>
> 输出：[11]
>
> 示例 5：
>
> 输入：nums = [4,-2], k = 2
>
> 输出：[4]

这个题虽然叫滑动窗口最大值，其实主要的知识点是队列。

其实这个题，我们主要是要让最大的数保留下来，那么我们最后加入的数肯定是在当前窗口中最后滑出的，所以如果我们新加入的数大于某一个数我们其实可以直接剔除掉那个数。这样一个个数添加维护下来其实最后就是一个单调递减队列
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const windows_queue = [];
    // 初始化q
    for (let i = 0; i < k; i++) {
        // 相当于定义了一个单调队列，每次新来的都会淘汰掉所有比他自己小的，然后排在比他大的后面
        while (windows_queue.length && nums[i] >= nums[windows_queue[windows_queue.length - 1]]) {
            windows_queue.pop();
        }
        windows_queue.push(i);
    }

    const ans = [nums[windows_queue[0]]];
    for (let i = k; i < n; i++) {
        while (windows_queue.length && nums[i] >= nums[windows_queue[windows_queue.length - 1]]) {
            windows_queue.pop();
        }
        windows_queue.push(i);
        while (q[0] <= i - k) {
            windows_queue.shift();
        }
        ans.push(nums[windows_queue[0]]);
    }
    return ans;
};
```


要写一个简单的队列代码可以如下：
```js
// js实现一个简单队列
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        let size = this.tailIndex - this.headIndex;

        if(size <= 0) return undefined;

        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;

        if(this.tailIndex == this.headIndex) {
            this.tailIndex = 0;
            this.headIndex = 0;
        }

        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    get length() {
        return this.tailIndex - this.headIndex;
    }
}
```