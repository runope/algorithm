# [0056] 合并区间

> 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
> 
> 示例 1：
>
> 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
>
> 输出：[[1,6],[8,10],[15,18]]
>
> 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
>
> 示例 2：
>
> 输入：intervals = [[1,4],[4,5]]
>
> 输出：[[1,5]]
>
> 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

这道题我们可以直接按照左端点进行排序，因为我们对区间进行取并集时，起始位置一定是排序后的第一个区间起始位置。之后我们只要把后面区间的起始点与前一个区间的结束点进行比较，就知道两个区间是否相交。这样就能判断是扩展前一区间还是新建一个区间。

我们直接用sort函数搞这个题。

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals

    // 按照左侧进行排序
    intervals.sort((a, b)=> a[0] - b[0])

    const res = [intervals[0]]

    for(let i = 0; i < intervals.length; i++) {
        const cur = intervals[i]
        const temp = res[res.length - 1]
        if(temp[1] < cur[0]) res.push(cur)
        else temp[1] = Math.max(cur[1], temp[1])
    }
    return res
};
```