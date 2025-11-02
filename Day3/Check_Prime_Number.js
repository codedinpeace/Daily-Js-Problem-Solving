function checkPrimeNumber(num){
    if(num%2 === 0 || num%3 === 0 || num%2 === 0 && num%3 === 0){
         console.log("Number is not a prime number")
    }

    else{
         console.log("Number is a prime number")
    }
}


console.log(checkPrimeNumber(7))