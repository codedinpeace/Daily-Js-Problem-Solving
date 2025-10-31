function checkPalindrome(str){
    const reversedStr = str.split("")
    const reversedStrArray = reversedStr.reverse()
    const reversedString = reversedStrArray.join("")

    if(str === reversedString) {
        return true
    }

    else{
        return false
    }
}

console.log(checkPalindrome("madam"))