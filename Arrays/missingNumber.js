
    
  function missingNumber(nums){

let n=nums.length;
let sum=n*(n+1)/2;

for(let num of nums){
  sum-=num;
}
return sum;
  }
  console.log(missingNumber([0,1,3,4,2,8,5,6]));