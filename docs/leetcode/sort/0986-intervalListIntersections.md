# [0986] 区间列表的交集

> 给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。
>
> 返回这 两个区间列表的交集 。
> 
> 形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。
>
> 两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。
>
> 示例 1：
>
> 输入：firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
>
> 输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
>
> 示例 2：
>
> 输入：firstList = [[1,3],[5,9]], secondList = []
>
> 输出：[]
>
> 示例 3：
>
> 输入：firstList = [], secondList = [[4,8],[10,12]]
>
> 输出：[]
>
> 示例 4：
>
> 输入：firstList = [[1,7]], secondList = [[3,10]]
>
> 输出：[[3,7]]

不用脑子的写法，枚举可能性即可：
```js
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const firstLen = firstList.length, secondLen = secondList.length

    let firstCur = 0, secondCur = 0, res = []

    while(firstCur < firstLen && secondCur < secondLen) {
        if(firstList[firstCur][0] < secondList[secondCur][0]) {
            if(firstList[firstCur][1] < secondList[secondCur][0]) firstCur++
            else {
                res.push([secondList[secondCur][0], Math.min(firstList[firstCur][1], secondList[secondCur][1])])
                if(firstList[firstCur][1] < secondList[secondCur][1]) firstCur++
                else secondCur++
            }
        }else {
            if(secondList[secondCur][1] < firstList[firstCur][0]) secondCur++
            else {
                res.push([firstList[firstCur][0], Math.min(firstList[firstCur][1], secondList[secondCur][1])])
                if(firstList[firstCur][1] < secondList[secondCur][1]) firstCur++
                else secondCur++
            }
        }
    }
    return res
};
```

用用脑子，首先是移动，其实每次移动都是移动右边界小的，所以移动我们不用分情况讨论可以直接合并。再者，取交集时，其实是max右边界和min左边界，所以取交集这一段也是可以合并的。由于不存在交集简单一点，我们先想不存在交集的情况，再取反，不存在交集firstList[firstCur][1] < secondList[secondCur][0] || firstList[firstCur][0] > secondList[secondCur][1]，取反firstList[firstCur][1] >= secondList[secondCur][0] && firstList[firstCur][0] <= secondList[secondCur][1]
代码如下：
```js
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
```