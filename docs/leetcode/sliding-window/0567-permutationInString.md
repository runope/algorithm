# [0567] 字符串的排列

> 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
>
> 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
>
> 示例 1：
>
> 输入: s1 = "ab" s2 = "eidbaooo"
> 输出: True
> 解释: s2 包含 s1 的排列之一 ("ba").
> 示例 2：
>
> 输入: s1= "ab" s2 = "eidboaoo"
> 输出: False

没多大难度，和0438那道题基本一样，就不细写了。直接上代码：

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {

    let s1_map = {}
    for(let i = 0; i < s1.length; i++){
        s1_map[s1[i]] = (s1_map[s1[i]] || 0) + 1
    }

    let right = 0, left = 0
    window_map = {}
    while(right < s2.length) {

        window_map[s2[right]] = (window_map[s2[right]] || 0) + 1

        while(window_map[s2[right]] > (s1_map[s2[right]] || 0)) {
            window_map[s2[left]]--
            left++
        }

        right++
        if(right - left === s1.length) return true
    }
    return false
};
```