function solution(nums){
  return nums == null ? [] : nums.sort(function (a, b) {return a - b})
}

console.log(solution([1,2,3,10,5]))