var yourName = prompt("What is Your name? ");
var yourGender = prompt("What is Your Gender?");
var yourAge = prompt("Enter Your Age ")
if (yourAge <= 0) {
    alert("invalid age");
}

var confirmation = confirm("press cancel if you dont want the welcome message");
// Nested if Else

if (confirmation) {
    if (yourGender.toLowerCase() == "male") {
        alert("Welcome!\n Mr " + yourName);
    }
    else if (yourGender.toLowerCase() == "female") {
        alert("Welcome!\n Ms " + yourName);
    }
    else {
        alert("Welcome!\n" + yourName);
    }
}
else {
    console.log("the user skipped the welcoming message");
}
yourAnswers =[];
var yourLanguage = prompt("your english is good?");
if(yourLanguage != "yes" &&  yourLanguage != "no"){
    yourAnswers.push("invalid");
}
else{
yourAnswers.push(yourLanguage);}


var martialStatus = prompt("are you single ?");
if(martialStatus != "yes" && martialStatus != "no"){
    yourAnswers.push("invalid");
}
else{
yourAnswers.push(martialStatus);}

var mentalStatus = prompt("are you happy?")
if(mentalStatus != "yes" && mentalStatus != "no"){
    yourAnswers.push("invalid");
}
else{
yourAnswers.push(mentalStatus);}

console.log(yourAnswers[0],yourAnswers[1],yourAnswers[2]);

    
for(let i = 0 ; i < yourAnswers.length ;i++){

    console.log(yourAnswers[i]);
}




