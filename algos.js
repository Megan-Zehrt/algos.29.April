// 1464. Maximum Product of Two Elements in an Array

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    nums.sort((a,b) => a-b)
    return (nums[nums.length-1]-1) * (nums[nums.length-2]-1)
};