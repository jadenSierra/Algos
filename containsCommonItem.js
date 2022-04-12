const arrA1 = ["a","b","c","x"]
const arrA2 = ["z","y","i"]

const arrB1 = ["a","b","c","x"]
const arrB2 = ["z","y","x"]


/*questions id ask
    - What type are the items in the array?
        - If strings, does capilization matter?
    -  if Int, is this list ordered?
*/

/* 
    apprach: do a double for loop and compare each item for the first array with the second array/ get the length of each array and run the first loop on the shorter array
*/

const containsCommonItems = (arr1, arr2) => {

    const shorterArr = arr1.length < arr2.length ? arr1 : arr2;
    const longerArr = arr1.length > arr2.length ? arr1 : arr2;
    console.log(shorterArr);
    console.log(longerArr);

    for(let i = 0; i < shorterArr.length; i++){
        for(let j = 0; j < longerArr.length; j++) {
            if(shorterArr[i] === longerArr[j]){
                return true
            }
        }
    }
    return false
}

// console.log(containsCommonItems(arrA1, arrA2));
// console.log(containsCommonItems(arrB1, arrB2));

//quadradic solution 


const containsCommonItems2 = (arr1, arr2) => {

    const items = {}
    const shorterArr = arr1.length < arr2.length ? arr1 : arr2;
    const longerArr = arr1.length > arr2.length ? arr1 : arr2;

    for(let item of longerArr){
        console.log(item);
        if(items[item]){
            items[item]++
        } else {
            items[item] = 1;
        }
    }

    console.log(items);

    for(let itemCompare of shorterArr){
        console.log(itemCompare);
        if(items[itemCompare]){
            return true
        }
    }

    return false

}


console.log(containsCommonItems2(arrA1, arrA2));
console.log(containsCommonItems2(arrB1, arrB2));