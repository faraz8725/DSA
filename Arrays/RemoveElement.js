//To remove the number from Array
function removeElement (arr,target){
  let newarr=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==target){
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(removeElement([1,2,3,2,2,5],2))

//Method2

function Remove(num,value){
  let num2=[];
  let j=0;
  for(let i=0;i<num.length;i++){

    if(num[i]!==value){
      num2[j]=num[i];
      j++;
    }
  }
  return num2;
}
console.log(Remove([1,2,2,2,3],2))