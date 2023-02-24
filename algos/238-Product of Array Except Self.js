var productExceptSelf = function(nums) {
  for (let i=0;i<nums.length;i++){
      let without = nums.filter(number=> number != nums[i])
      console.log("without is ",without)
      for (let j=0;j<without.lenght;j++){
          let product = 1
          product = without[j] * product
          
      }; console.log(product)
      
  }
      

};
nums = [1,2,3,4]
productExceptSelf(nums)