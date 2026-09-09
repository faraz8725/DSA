function commonPrefix(str){

  let prefix=str[0];
  let newString="";
  for(let i=0;i<str.length;i++){
    let j=0;
    let char=str[i][j];
    while(char === prefix[j]){
      newString+= char;
      j++;
    }
    return "empty";
  }
  return newString;
}
console.log(commonPrefix(["flower","flow","flight"]));