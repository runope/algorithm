// /**
//  * @param {number[][]} firstList
//  * @param {number[][]} secondList
//  * @return {number[][]}
//  */
// var intervalIntersection = function(firstList, secondList) {
//     const firstLen = firstList.length, secondLen = secondList.length

//     let firstCur = 0, secondCur = 0, res = []

//     while(firstCur < firstLen && secondCur < secondLen) {
//         if(firstList[firstCur][0] < secondList[secondCur][0]) {
//             if(firstList[firstCur][1] < secondList[secondCur][0]) firstCur++
//             else {
//                 res.push([secondList[secondCur][0], Math.min(firstList[firstCur][1], secondList[secondCur][1])])
//                 if(firstList[firstCur][1] < secondList[secondCur][1]) firstCur++
//                 else secondCur++
//             }
//         }else {
//             if(secondList[secondCur][1] < firstList[firstCur][0]) secondCur++
//             else {
//                 res.push([firstList[firstCur][0], Math.min(firstList[firstCur][1], secondList[secondCur][1])])
//                 if(firstList[firstCur][1] < secondList[secondCur][1]) firstCur++
//                 else secondCur++
//             }
//         }
//     }
//     return res
// };

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    const firstLen = firstList.length, secondLen = secondList.length

    let firstCur = 0, secondCur = 0, res = []

    while(firstCur < firstLen && secondCur < secondLen) {
        if(firstList[firstCur][1] >= secondList[secondCur][0] && firstList[firstCur][0] <= secondList[secondCur][1])
            res.push([Math.max(firstList[firstCur][0], secondList[secondCur][0]), Math.min(firstList[firstCur][1], secondList[secondCur][1])])
        if(firstList[firstCur][1] > secondList[secondCur][1]) secondCur++
        else firstCur++
    }
    return res
};