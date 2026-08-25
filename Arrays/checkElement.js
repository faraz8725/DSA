function checkElement(num,target){

  for (let i=0;i<num.length;i++){
    if(num[i]===target){
      return true;
    }
  }
      return false;
    
  
}
console.log(checkElement([1,2,3,4],4))