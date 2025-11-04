let count = 0;

for(let i = 0; i<=20; i++){
    if(i %2 !== 0){
        console.log(i)
        count++

        if(count === 3){
            break
        }
    }
}