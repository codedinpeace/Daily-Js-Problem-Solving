function FindSmallestNumber (arr) {
    const sortedArray = arr.sort((a,b)=>a-b)
    const smallestNumber = sortedArray[0]

    return smallestNumber
}


console.log(FindSmallestNumber([5,2,3,4,8]))