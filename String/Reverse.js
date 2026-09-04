function Reverse(str){

  let str2="";
  for(let i=str.length;i>=0;i--){
    let char=str.charAt(i);
    str2=str2.concat(char);
  }
  return str2;
}
console.log(Reverse("Faraz"));