// 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： 
// counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

// 输入：nums = [5,2,6,1]
// 输出：[2,1,1,0] 
// 解释：
// 5 的右侧有 2 个更小的元素 (2 和 1)
// 2 的右侧仅有 1 个更小的元素 (1)
// 6 的右侧有 1 个更小的元素 (1)
// 1 的右侧有 0 个更小的元素

var countSmaller = function(nums) {
  let counts = []
  function findNums(Arr) {
    if (nums === 1) return 0
    let flag = 0
    for (let i = 1; i < nums.length; i ++) {
      if(nums[i] < nums[0]) {
        flag ++
      }
    }
    return flag
  }
  let len = nums.length
  for(let i = 0; i < len; i ++) {
    counts.push(findNums(nums))
    nums.shift()
  }
  return counts
};