# [0003] 滑动窗口

> 给定一个字符串，请你找出其中不含有重复字符的 最长子串的长度。
>
> 示例 1:
>
> 输入: s = "abcabcbb"
>
> 输出: 3 
>
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
> 
> 示例 2:
>
> 输入: s = "bbbbb"
>
> 输出: 1
>
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
>
> 示例 3:
>
> 输入: s = "pwwkew"
>
> 输出: 3
>
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

滑动窗口可以用来解决一些查找满足一定条件的连续区间的性质（长度等）的问题。由于区间连续，因此当区间发生变化时，可以通过旧有的计算结果对搜索空间进行剪枝，这样便减少了重复计算，降低了时间复杂度。往往类似于“ 请找到满足 xx 的最 x 的区间（子串、子数组）的 xx ”这类问题都可以使用该方法进行解决。

滑动窗口算法的思路是这样：
我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。

我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 T 中的所有字符）。

此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。

重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

这个思路其实也不难，第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，最终找到最优解。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动。

下面给出伪代码框架：
非固定大小的滑动窗口：
```cpp
    string s, t;
    // 在 s 中寻找 t 的「最小覆盖子串」
    int left = 0, right = 0;
    string res = s;
    
    while(right < s.size()) {
        window.add(s[right]);
        right++;
        // 如果符合要求，说明窗口构造完成，移动 left 缩小窗口
        while (window 符合要求) {
            // 如果这个窗口的子串更短，则更新 res
            res = minLen(res, window);
            window.remove(s[left]);
            left++;
        }
    }
    return res;
```

固定窗口大小：
```cpp
// 固定窗口大小为 k
    string s;
    // 在 s 中寻找窗口大小为 k 时的所包含最大元音字母个数
    int  right = 0;
    while(right < s.size()) {
        window.add(s[right]);
        right++;
        // 如果符合要求，说明窗口构造完成，
        if (right>=k) {
            // 这是已经是一个窗口了，根据条件做一些事情
           // ... 可以计算窗口最大值等 
            // 最后不要忘记把 right -k 位置元素从窗口里面移除
        }
    }
    return res;
```

题解：
```js
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
```