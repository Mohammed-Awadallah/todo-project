// var yourName = prompt("What is Your name? ");
// var yourGender = prompt("What is Your Gender?");
// var yourAge = prompt("Enter Your Age ")
// if (yourAge <= 0) {
//     alert("invalid age");
// }

// var confirmation = confirm("press cancel if you dont want the welcome message");
// // Nested if Else

// if (confirmation) {
//     if (yourGender.toLowerCase() == "male") {
//         alert("Welcome!\n Mr " + yourName);
//     }
//     else if (yourGender.toLowerCase() == "female") {
//         alert("Welcome!\n Ms " + yourName);
//     }
//     else {
//         alert("Welcome!\n" + yourName);
//     }
// }
// else {
//     console.log("the user skipped the welcoming message");
// }

function arrPush(arr , answer){
    if(answer != "no" && answer != "yes"){
        arr.push("invalid");
    }
    else{
        arr.push(answer);
    }
    
}

function printArr(arr){
    for(var i = 0 ; i < arr.length ; i++){
        console .log(arr[i]);
    }
    
}
yourAnswers =[];

var martialStatus = prompt("are you married?");
var mentalStatus = prompt("are you happy?");
var healthStatus = prompt("are you sick ?");

arrPush(yourAnswers , martialStatus);
arrPush(yourAnswers , mentalStatus);
arrPush(yourAnswers , healthStatus);

printArr(yourAnswers);



