let array = [1,1,2,3,3,4,5,6,6,7]

function removeDUplicates(arr){
    const duplcatesRemoved = [...new Set(arr)]
    return duplcatesRemoved
}

console.log(removeDUplicates(array))