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
