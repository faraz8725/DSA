function palindrome(str){

  let str2="";
  for(let i=str.length;i>=0;i--){
    let char=str.charAt(i);
    str2=str2.concat(char);
  }
  if(str2===str){
    return ("Palindrome string");
  }

  return("Non-Palindrome string");
}
console.log(palindrome("kanak"));