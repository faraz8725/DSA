//To find the element which is repeated more than n/2 times in a array

function RepeatedElement(nums){

for(let i=0;i<nums.length;i++){
  let c=0;
  for(let j=0;j<nums.length;j++){
    if(nums[i]===nums[j]){
      c++;
    }
  }
  if(c>nums.length/2){
    return nums[i];
  }
}

}
console.log(RepeatedElement([2,3,2]));