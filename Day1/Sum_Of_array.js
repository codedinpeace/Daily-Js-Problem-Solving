const array = [1,2,34,5,6,7,8,99,283]

const sumOfArray = array.reduce((a,b)=>{
    return a + b
}, 0)


console.log(sumOfArray)