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