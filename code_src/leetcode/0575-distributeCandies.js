/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candySet = new Set(candyType)
    let typeNums = candySet.size
    if(typeNums > candyType.length/2) return candyType.length/2
    else return typeNums
};