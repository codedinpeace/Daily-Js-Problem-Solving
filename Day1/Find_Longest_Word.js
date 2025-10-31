const sentence = "Hello I am solving Javascript Problems"

function findLargestWord(str){
    let largestWord = "";
    const splitted = str.split(" ")
    for(let i = 0; i < splitted.length; i++){
        if(splitted[i].length > largestWord.length){
            largestWord = splitted[i]
        }
    }

    return largestWord
}

console.log(findLargestWord(sentence))