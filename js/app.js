var yourName = prompt("What is Your name? ");
var yourGender = prompt("What is Your Gender?");
var yourAge = prompt("Enter Your Age ")
if(yourAge <= 0 ) {
    alert("invalid age");
}





var confirmation = confirm("press cancel if you dont want the welcome message");
// Nested if Else
/*
if(confirmation){
    if(yourGender.toLowerCase() == "male"){
        alert("Welcome!\n Mr " + yourName);
    }
    else if(yourGender.toLowerCase() == "female"){
        alert("Welcome!\n Ms " + yourName);
    }
    else {
        alert("Welcome!\n" + yourName);
    }
        
}
else {
    console.log("the user skipped the welcoming message");
}
    
    
