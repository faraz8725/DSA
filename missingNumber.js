//Program to find the missing number
function missingNumber(num){

let sum=0;

for(let i=0;i<num.length;i++){
  sum+=num[i];
}
return num.length*(num.length+1)/2 - sum;


}
console.log(missingNumber([1,4,2,3,0]));