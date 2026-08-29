//Find the number of prime numbers between 1-n
function PrimeNumbers(n){
  let count=0;
for(let i=2;i<n;i++){
  let c=0;
  for (let j=1;j<n;j++){
    if(i%j===0){
      c++;
    }
  }
  if(c===2){
    count ++;
  }
}
return count;
}

console.log(PrimeNumbers(100));