function singleNumber(nums){
let c=0;

for (let j = 0; j < nums.length; j++) {

    let count=0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[j] === nums[i]) {
            count++;
        }
    }

    if (count === 1) {
        return nums[j];
    }
}

}
console.log(singleNumber([1,2,3,2,3,1,5]));