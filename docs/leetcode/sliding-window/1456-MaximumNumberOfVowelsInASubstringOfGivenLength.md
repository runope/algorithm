# [1456] 定长子串中元音的最大数目

> 给你字符串 s 和整数 k 。
>
> 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
>
> 英文中的 元音字母 为（a, e, i, o, u）。
>
>示例 1：
>
>输入：s = "abciiidef", k = 3
>
>输出：3
>
>解释：子字符串 "iii" 包含 3 个元音字母。
>
>示例 2：
>
>
>输入：s = "aeiou", k = 2
>
>输出：2
>
>解释：任意长度为 2 的子字符串都包含 2 个元音字母。
>
>示例 3：
>
>输入：s = "leetcode", k = 3
>
>输出：2
>
>解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。

这个题没啥好说的，滑动窗口直接上

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let right = 0, sum = 0,ans = 0
    while(right < s.length) {
        sum = sum + isVowel(s.charAt(right))
        right++
        if(right >= k) {
            ans = Math.max(ans, sum)
            sum = sum - isVowel(s.charAt(right-k))
        }
    }
    return ans
};

function isVowel(s) {
    return s==='a' || s=='e' || s==='i' ||s==='o' ||s==='u' ? 1:0;
}
```

用map代替isVowel function
```js
var maxVowels = function(s, k) {
    const vowelMap = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
      }
    let right = 0, sum = 0,ans = 0
    while(right < s.length) {
        // js逻辑运算符优先级竟然比算术运算符优先级低，吐了
        sum = sum + (vowelMap[s.charAt(right)] || 0)
        right++
        if(right >= k) {
            ans = Math.max(ans, sum)
            sum = sum - (vowelMap[s.charAt(right-k)] || 0)
        }
    }
    return ans
};
```