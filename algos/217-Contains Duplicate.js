var containsDuplicate = function(nums) {
  console.log(nums)
  let map = {}
  for (let i = 0; i<nums.length;i++) { 
      if (!map[nums[i]]) { 
          map[nums[i]] = 1
      } else { 
          return true 
      } 
  } return false
};

containsDuplicate([1,2,3,1])