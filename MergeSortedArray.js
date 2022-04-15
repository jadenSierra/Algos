ExampleArr1A = []
ExampleArr1B = []
//expected output [1,2,4,5,6,7,8,8,9,14]
ExampleArr2A = [1,4,6,8,9,11]
ExampleArr2B = [2,5,7,8,13,36,57,78]

ExampleArr3A = [0,2,6,8,9,11]
ExampleArr3B = []

function mergeSortedArrays(array1, array2) {
    let sortedJoinedArr = [];
    let arr1Idx = 0;
    let arr2Idx = 0;
    let arr1 = array1.slice();
    let arr2 = array2.slice();

    if(arr1.length === 0 && arr2.length === 0){
        return []
    }

    while(arr1Idx < arr1.length || arr2Idx < arr2.length){
        if(!arr2[arr2Idx]){
            return [...sortedJoinedArr, ...arr1.slice(arr1Idx)]
        }
        if(!arr1[arr1Idx]){
            return [...sortedJoinedArr, ...arr2.slice(arr2Idx)]
        }
        if(arr1[arr1Idx] <= arr2[arr2Idx]){
            sortedJoinedArr.push(arr1[arr1Idx])
            arr1Idx++
        } else {
            sortedJoinedArr.push(arr2[arr2Idx])
            arr2Idx++
        }
    }
}

console.log(mergeSortedArrays(ExampleArr1A, ExampleArr1B))
// console.log(mergeSortedArrays(ExampleArr2A, ExampleArr2B))
// console.log(mergeSortedArrays(ExampleArr3A, ExampleArr3B))

//create an output array
// create a 2 ponter variables used for comparison
// run through an array and compare variables, pushing the smaller variable into the new array
//if one array is shorter, add all the remaining values of the longer array to the end of the new array
