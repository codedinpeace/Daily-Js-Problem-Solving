function countOccurences(arr){
    let count = {}

    for(let i = 0; i< arr.length; i++){

        let item = arr[i]

        if(count[item]){
            count[item] += 1
        }

        else{
            count[item] = 1;
        }
    }

    return count
}

console.log(countOccurences(['a','a','a','b','b', 'c']))