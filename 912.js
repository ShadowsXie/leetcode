// 给你一个整数数组 nums，请你将该数组升序排列

// 快速排序

var sortArray = function(nums) {
  if (nums.length <= 1) {
      return nums
  }
  let ArrLeft = [],ArrRight = []
  let flag = nums[0]
  for(let i = 1; i < nums.length; i ++) {
    if(nums[i] < flag) {
      ArrLeft.push(nums[i])
    } else {
      ArrRight.push(nums[i])
    }
  }
  return [...sortArray(ArrLeft), flag, ...sortArray(ArrRight)]
};