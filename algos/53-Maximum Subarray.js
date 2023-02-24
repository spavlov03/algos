// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

var maxSubArray = function(nums) {
  // console.log(nums.length)
  if (nums.length == 1) { 
      // console.log("inside if",nums)
      return nums[0]
  } else {
    // console.log("inside else")
      let current = 0
      let max = -Infinity
      for (let i = 0;i<nums.length; i++) { 
          current += nums[i]
          max = Math.max(current,max)
          if(current<0) { 
            current = 0
          }
      } return max
  }
};

const num = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(num)