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