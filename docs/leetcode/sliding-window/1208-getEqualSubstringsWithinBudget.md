# [1208]尽可能使字符串相等

> 将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的ASCII码值的差的绝对值。
>
> 用于变更字符串的最大预算是maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
>
> 如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。
>
> 如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。
> 
> 示例 1：
>
> 输入：s = "abcd", t = "bcdf", maxCost = 3
> 输出：3
> 解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。
>
> 示例 2：

> 输入：s = "abcd", t = "cdef", maxCost = 3
> 输出：1
> 解释：s 中的任一字符要想变成 t 中对应的字符，其开销都是 2。因此，最大长度为 1。
> 示例 3：
>
> 输入：s = "abcd", t = "acde", maxCost = 0
> 输出：1
> 解释：a -> a, cost = 0，字符串未发生变化，所以最大长度为 1。

这个题出的有点不太严谨，首先他并没有说两个字符串是否等长，其次并没有说明两个字符串中，相同子串index是否也要对应
下面直接把上述两个条件当做存在，子串问题，直接尝试滑动窗口，参考0003，这个题不难
就是js取字符ascii值有点搞，得charCodeAt()

```js
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
```