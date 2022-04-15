const nums = [2,7,11,15]
const target = 9;
// Output: [0,1]

const nums2 = [3,2,4];
const target2 = 6;
//output: [1,2]


const nums3 = [3,3];
const target3 = 6;
// output: [0,1]


// brute force
const twoSum = (arr, target) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j= i+1; j <= arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        };
    }
}

const twoSum2 = (arr, target) => {
    
}



console.log(twoSum(nums, target));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));