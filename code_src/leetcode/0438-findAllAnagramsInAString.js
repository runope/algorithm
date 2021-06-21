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
        
        if(windows[s[right]] > (p_map[s[right]] || 0)) {
            left++
            windows[left]--
        }
        right++
        if(right - left === p.length) res.push(left)

    }
    return res
};

let s = "cbaebabacd"
let t = "abc"

console.log(findAnagrams(s, t))

// [0,6]


