function FindMaxNumber (arr) {
    let maximum = 0;
    arr.map((a)=>{
        if(a > maximum){
            maximum = a
        }
    })

    return maximum
}

console.log(FindMaxNumber([1,2,3,4,25,6,7,8,9,10]))