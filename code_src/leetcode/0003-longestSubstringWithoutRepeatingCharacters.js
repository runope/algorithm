/*
 * @Author: Runope
 * @Date: 2021-06-16 15:08:49
 * @LastEditors: Runope
 * @LastEditTime: 2021-06-16 15:54:51
 * @Description: file content
 * @contact: runope@qq.com
 */


/* 滑动窗口可以用来解决一些查找满足一定条件的连续区间的性质（长度等）的问题。
* 由于区间连续，因此当区间发生变化时，可以通过旧有的计算结果对搜索空间进行剪枝，
* 这样便减少了重复计算，降低了时间复杂度。往往类似于“ 请找到满足 xx 的最 x 的区间（子串、子数组）
* 的 xx ”这类问题都可以使用该方法进行解决。
* https://www.cnblogs.com/huansky/p/13488234.html
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const s_set = new Set()
    const n = s.length
    // rk 右指针
    let rk = -1, ans = 0
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            s_set.delete(s.charAt(i - 1))
        }
        while (rk + 1 < n && !s_set.has(s.charAt(rk + 1))) {
            s_set.add(s.charAt(rk + 1))
            rk++;
        }
        ans = Math.max(ans, rk - i + 1)
    }
    return ans
};

/** 方法二，用hashMap空间换取搜索set的时间
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const s_map = new Map()
    let ans = 0, start = 0
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i)
        // 为什么这里要Math.max(s_map.get(ch) + 1, start)，因为每次右移并没有清空map
        s_map.has(ch) && (start = Math.max(s_map.get(ch) + 1, start))
        ans = Math.max(ans, i - start + 1)
        // 后面的set赋值会直接覆盖掉前面的，所以这里可以保证map中是ch字符最后出现的index
        s_map.set(ch, i)
    }
    return ans
}

