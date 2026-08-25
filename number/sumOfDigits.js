//to print the sum of digits of a number

function sumOfDigits(num)
{
  let rem,sum=0;
  while(num>0){
  
     rem=num%10;
     sum+=rem;
       num=Math.floor(num/10);
  }
  return sum;
}
console.log(sumOfDigits(123));