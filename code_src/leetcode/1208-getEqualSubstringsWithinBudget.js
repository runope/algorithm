/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0, right = 0
    let sum = 0, res = 0
    while(right < t.length) {
        sum = sum + Math.abs(s.charCodeAt(right) - t.charCodeAt(right))
        right = right + 1
        while(sum > maxCost) {
            sum = sum - Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
            left = left + 1
        }
        res = Math.max(res, right - left)
    }
    return res
};
