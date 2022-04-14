
function reverseString(str) {
    const strArr = str.split("");
    let reverseStr = ""

    for(let i = strArr.length - 1; i >= 0; i--){
        reverseStr+=strArr[i]
    }

    return reverseStr
}



console.log(reverseString("cAndy CaNe"));



