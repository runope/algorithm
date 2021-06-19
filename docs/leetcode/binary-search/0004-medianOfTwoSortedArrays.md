# [0004] 寻找两个有序数组的中位数

>给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
>
>请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
>
>你可以假设 nums1 和 nums2 不会同时为空。
>
>示例 1:
>
>nums1 = [1, 3]
>
>nums2 = [2]
>
>则中位数是 2.0
>
>示例 2:
>
>nums1 = [1, 2]
>
>nums2 = [3, 4]
>
>则中位数是 (2 + 3)/2 = 2.5

这道题如果不算时间复杂度的话其实是一个非常简单的题目，有序数组合并后求中位数即可。有序数组的合并实际上就是利用了一次归并排序的思想。

这里取中位数可以利用一个小技巧：对任意一个数x，无论x的奇偶性，中位数都为： ((x+1)/2 + (x+2)/2) / 2。

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  const nums = [];
  let i = 0;
  let j = 0;
  let cnt = 0;
  while (cnt < len1 + len2) {
    if (i === len1) {
      while (j < len2) {
        nums[cnt++] = nums2[j++];
      }
      break;
    }
    if (j === len2) {
      while (i < len1) {
        nums[cnt++] = nums1[i++];
      }
      break;
    }
    if (nums1[i] < nums2[j]) {
      nums[cnt++] = nums1[i++];
    } else {
      nums[cnt++] = nums2[j++];
    }
  }
  const left = Math.floor((len1 + len2 + 1) / 2) - 1;
  const right = Math.floor((len1 + len2 + 2) / 2) - 1;
  return (nums[left] + nums[right]) / 2;
};
```

这样的时间复杂度是O(m+n)。

但是题目要求，时间需要限制在O(log(m+n))之内了，处理起来就比较麻烦了。

首先看这个log级的时间复杂度，很容易就想到用二分的思想处理。关键是对谁二分比较合适，这里其实需要对每次取得的中位数 K 二分。那么题目的本质就变成了求第 K 小数的算法。

之后来观察一下，我们需要在两个数组中找到第K/2个数，之后比较两数组大小。

若arr1不存在第K/2个数，或`arr1[K/2] < arr2[K/2]`，那么不管arr1中前K/2个数字具体是多少，都不可能为最后所求的第K小数（因为即使arr2的前K/2个数字都比`arr1[K/2]`小，那`arr1[K/2]`最多也只会有`K/2-1+K/2-1 = K-2`个比它小，即`arr1[K/2]`最多为第K-1小的数。）因此我们能淘汰掉arr1的前K/2个数字(即起始位置后移K/2)。反之淘汰掉arr2的前K/2个数字。

由于已经排除掉了前K/2小的数字了，那么接下来我们只需要递归地排除前`K - K/2`个数字，直到将一个数组全部排除，或者排除到第1小的数字为止。

然后针对不同的边界情况做出处理：

1. 如果一个数组的起始位置大于该数组长度，说明该数组全部数字都被淘汰了，那么现在就可以只在另一个数组中取中位数就得出答案了
2. 当K=1时，只需要比较两数组的起始位置即可。

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const left = Math.floor((len1 + len2 + 1) / 2);
  const right = Math.floor((len1 + len2 + 2) / 2);
  return (findMedian(nums1, nums2, left) + findMedian(nums1, nums2, right)) / 2;
};

function findMedian(nums1, nums2, K) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (len1 === 0) return nums2[K - 1];
  if (len2 === 0) return nums1[K - 1];
  if (K === 1) return Math.min(nums1[0], nums2[0]);

  const midK = Math.floor(K / 2);
  const mid1 = Math.min(len1, midK);
  const mid2 = Math.min(len2, midK);
  if (nums1[mid1 - 1] < nums2[mid2 - 1]) {
    return findMedian(nums1.slice(mid1), nums2, K - mid1);
  } else {
    return findMedian(nums1, nums2.slice(mid2), K - mid2);
  }
}
```

更好地，我们可以用两个变量记录坐标，即原地算法来解，可以节省复制数组的时间与空间消耗。

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const left = Math.floor((len1 + len2 + 1) / 2);
  const right = Math.floor((len1 + len2 + 2) / 2);
  return (findMedian(nums1, 0, nums2, 0, left) + findMedian(nums1, 0, nums2, 0, right)) / 2;
};

function findMedian(nums1, i, nums2, j, K) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (i >= len1) return nums2[j + K - 1];
  if (j >= len2) return nums1[i + K - 1];
  if (K === 1) return Math.min(nums1[i], nums2[j]);

  const midK = Math.floor(K / 2);

  const mid1 = i + midK - 1 < len1 ? nums1[i + midK - 1] : Number.MAX_VALUE;
  const mid2 = j + midK - 1 < len2 ? nums2[j + midK - 1] : Number.MAX_VALUE;

  return mid1 < mid2
    ? findMedian(nums1, i + midK, nums2, j, K - midK)
    : findMedian(nums1, i, nums2, j + midK, K - midK);
}
```
