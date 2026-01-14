// While Loop

// while(condition)
//{do this code incrase to end condition}

let x = 0;
let pass = "123";
let userInp;

while(x <= 3){
        userInp = prompt("Enter Your Password: ");
        if(userInp === pass){
                console.log("Login success");
                break;
        }
        else if(x < 3){
                console.log("Attempt Number: " + `${x}`);
        }
        if(x === 3){
                console.log("Try Again later, you Exceed the limits");
        }
        x++;
}