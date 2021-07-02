# [1288] 删除被覆盖区间

> 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
>
> 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
>
> 在完成所有删除操作后，请你返回列表中剩余区间的数目。
>
> 示例：
>
> 输入：intervals = [[1,4],[3,6],[2,8]]
>
> 输出：2
>
> 解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。

这个题思路不难，先把按左边界从小到大排序，这样我们就只用比较右边界。我们用一个tmp去记录截止到当前右边界最大的值，如果新加入右边界小于等于tmp，说明新加入的区间是前面的子区间，res就要--
但是要注意一些特殊点，就是左边界相同时，我们讲右边界大的放在前面，方便我们吃掉小区间

```js
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {

    let cur = 1, res = intervals.length

    intervals = intervals.sort((a, b) => {
        let res = a[0] - b[0]
        if(res !== 0) return res
        else return -(a[1] - b[1])
    })
    let tmp = intervals[0][1]

    while(cur < intervals.length) {
        if(tmp >= intervals[cur][1]) res--
        else tmp = intervals[cur][1]
        cur++
    }

    return res
};
```