var name = prompt("enter your name");
var age = prompt("enter your age");
var yearsOfExp = prompt("enter your years of experience");
var rate = prompt("enter yourself rating from 1 to 10");

if(yearsOfExp < 2){
     console.log("Junior"); 
    alert("Junior");
    document.getElementById("job").innerHTML = "Junior";
}else if(yearsOfExp >= 2 && yearsOfExp <= 5){
      console.log( "Mid-Level"); 
    alert( "Mid-Level");
    document.getElementById("job").innerHTML =  "Mid-Level";
}else if(yearsOfExp > 5 && yearsOfExp <= 10){
     console.log( "Senior"); 
    alert( "Senior");
    document.getElementById("job").innerHTML =  "Senior";
}else if(yearsOfExp > 10){
       console.log( "Expert"); 
    alert( "Expert");
    document.getElementById("job").innerHTML =  "Expert";
}

switch (true) {
    case rate >= 9:
    console.log( "Excellent"); 
    alert( "Excellent");
    document.getElementById("level").innerHTML =  "Excellent";
    break;
    case rate >= 7:
    console.log( "Good"); 
    alert( "Good");
    document.getElementById("level").innerHTML =  "Good";
    break;
    case rate >= 5:
    console.log( "Average"); 
    alert( "Average");
    document.getElementById("level").innerHTML =  "Average";
    break;
    default:
    console.log("Needs Improvement"); 
    alert("Needs Improvement");
    document.getElementById("level").innerHTML = "Needs Improvement";
}

var baseSalary = 1000;
var finalSalary;

if(yearsOfExp > 0 && yearsOfExp <= 2){
    finalSalary = baseSalary + (baseSalary*0.1)
}else if(yearsOfExp >= 3 && yearsOfExp <= 5){
    finalSalary = baseSalary + (baseSalary*0.15)
}else if(yearsOfExp > 5 ){
    finalSalary = baseSalary + (baseSalary*0.20)
}
document.getElementById("salary").innerHTML = "your salary is " + finalSalary;

var currentHour = new Date().getHours();
if(currentHour >= 9 && currentHour < 18){
     console.log("day shift."); 
    alert("day shift.");
    document.getElementById("shift").innerHTML = "day shift.";
}else{
    console.log( "night shift"); 
    alert( "night shift");
    document.getElementById("shift").innerHTML =  "night shift";
}




