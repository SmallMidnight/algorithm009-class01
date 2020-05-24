/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0)return 0;
  let a = 0;
  let b = 1;
  let len = nums.length;
  while( b < len){
      if(nums[b] !== nums[a]){
          a++;
          nums[a] = nums[b];
      }
      b++;
  }
  return a+1;
};