function ReverseString(str){
    const reversedStr = str.split("")
    const reversedStrArray = reversedStr.reverse()
    const reversedString = reversedStrArray.join("")
    return reversedString
}

console.log(ReverseString("Hello"))

