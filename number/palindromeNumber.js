// Program for the palindrome number

function palindromeNumber(num){
let rem;
let original=num;
let rev=0;
  while(num>0){
    rem=num%10;
 rev=rev*10 +rem;
 num=Math.floor(num/10);
  }
if(rev===original){    
  return("Palindrome Number");
}else{
  return ("Non Palindrome number");
}

}console.log(palindromeNumber(121));