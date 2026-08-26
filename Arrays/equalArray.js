function equal(arr1,arr2){
  if(arr1.length!== arr2.length){
    return("Unequal array");
  }
  for (let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
      return ("UnEqual array");
    }
    
  }
  return ("Equal array");
}
console.log(equal([12,2,3],[12,2,3,0]))