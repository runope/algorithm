/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let cntA = 0, cntB = 0
    const address = new Array(10).fill(0)

    for(let i = 0; i < secret.length; i++) {
        if(secret[i] == guess[i]) cntA++
        else{
            address[Number(secret[i])]++
            address[Number(guess[i])]--
        }
    }
    const cntNone = address.reduce((prev, cur) => (cur > 0? prev + cur: prev), 0)
    cntB = secret.length - cntA - cntNone
    return `${cntA}A${cntB}B`
};