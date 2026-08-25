//Find the index of the element of the array
function findIndex(num,target){
  for(let i=0;i<num.length;i++){
    if(num[i]=== target){
      return i+1;
    }
  }
  return("Not present");
}
console.log(findIndex([1,2,3,5],6))