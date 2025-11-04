const password = prompt("Enter the password")
let attempts = 3;

if(password === null || password.trim() === ""){
    console.error("Write Something")
}

while(password !== "pranamshaw"){
    password = prompt("Enter The Password")
    attempts--

    if(attempts === 0){
        alert("Account Locked")
    }
}