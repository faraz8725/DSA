function singleNumber(nums){
let c=0;
let j=0;
for(let i=1;i<nums.length;i++){
if(nums[j]===nums[i]){
  j ++;
}
return nums[j];
}
}
console.log(singleNumber([1,2,3,2,3]));