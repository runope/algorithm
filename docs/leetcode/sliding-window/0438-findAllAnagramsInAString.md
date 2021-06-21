# [0438] 找到字符串中所有字母异位词

> 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
>
> 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
>
> 说明：
>
> 字母异位词指字母相同，但排列不同的字符串。
>
> 不考虑答案输出的顺序。
>
> 示例 1:
>
> 输入:
>
> s: "cbaebabacd" p: "abc"
>
> 输出:
>
> [0, 6]
>
> 解释:
>
> 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
>
> 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
>
> 示例 2:
>
> 输入:
>
>s: "abab" p: "ab"

> 输出:
> [0, 1, 2]
>
> 解释:
> 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
> 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
> 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。


滑动窗口的常规思维，这里需要强调的细节是，因为顺序无所谓所以用map去存字符以及字符出现的次数。进行匹配时，由于我们是定长定字符数，所以我们可以直接每次加入一个字符就去比较该字符的数量与所需数量的大小，如果加入后数量大了，说明这个已经不可能是我们需要的子串，我们需要移动left指针，直到该字符的个数满足要求
```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // init p_map
    let p_map = {}
    for(let i = 0; i < p.length; i++) {
        // undefined || 0 === 0
        p_map[p[i]] = p_map[p[i]] || 0
        p_map[p[i]]++
    }

    let right = 0, left = 0
    let res = [], windows = {}
    while(right < s.length) {
        windows[s[right]] = (windows[s[right]] || 0) + 1
        while(windows[s[right]] > (p_map[s[right]] || 0)) {
            windows[s[left]]--
            left++
        }
        right++
        if(right - left === p.length) res.push(left)

    }
    return res
};
```