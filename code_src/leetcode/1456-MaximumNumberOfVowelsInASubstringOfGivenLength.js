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

// // 用map代替isVowel function
// var maxVowels = function(s, k) {
//     const vowelMap = {
//         a: true,
//         e: true,
//         i: true,
//         o: true,
//         u: true,
//       }
//     let right = 0, sum = 0,ans = 0
//     while(right < s.length) {
//         // js逻辑运算符优先级竟然比算术运算符优先级低，吐了
//         sum = sum + (vowelMap[s.charAt(right)] || 0)
//         right++
//         if(right >= k) {
//             ans = Math.max(ans, sum)
//             sum = sum - (vowelMap[s.charAt(right-k)] || 0)
//         }
//     }
//     return ans
// };