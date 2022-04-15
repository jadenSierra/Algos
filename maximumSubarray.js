const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [1];
const nums3 = [5,4,-1,7,8];
const nums4 = [];


const subArray = (nums) => {
    let sum = 0;

    console.log(nums)

    if(!nums.length){
        return [];
    }

    if(nums.length === 1){
        return nums[0]
    }

    for(let i = 0; i < nums.length; i++){
        let pointerA = i;
        let pointerB = nums.length - i - 1;
        
        if(pointerA < pointerB) {
            console.log(nums[pointerA])
            console.log(nums[pointerB])
            sum += nums[pointerA] + nums[pointerB]
            console.log(sum);
        } else if(pointerA === pointerB){
            sum+=nums[pointerA];
            break
        } else {
            break;
        }
    }
    return sum;
}

console.log(subArray(nums1));