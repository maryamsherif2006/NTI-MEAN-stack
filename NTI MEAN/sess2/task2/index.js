// var input = document.getElementById("input").value;

var name = prompt("enter your name");
var birthYear = Number(prompt("enter your birth Year"));
var student = confirm("are you a student?");

var age = new Date().getFullYear() - birthYear;

console.log("Hello " + name + ", you are " + age + " years old."); 
alert("Hello " + name + ", you are " + age + " years old.");
document.getElementById("welcome").innerHTML = "Hello " + name + ", you are " + age + " years old.";


if(age < 13){
    console.log("Category:kid"); 
    alert("Category:kid");
    document.getElementById("state").innerHTML = "Category:kid";
}else if(age >= 13 && age <= 17){
    console.log("Category:teen"); 
    alert("Category:teen");
     document.getElementById("state").innerHTML = "Category:teen";
}if(age >= 18 && age <= 59){
    console.log("Category:Adult"); 
    alert("Category:Adult")
     document.getElementById("state").innerHTML = "Category:Adult";
}if(age >= 60){
    console.log("Category:senior"); 
    alert("Category:senior")
     document.getElementById("state").innerHTML = "Category:senior";
}
if(student){
    console.log("Don't forget to study hard!");
    alert("Don't forget to study hard!");
     document.getElementById("stud").innerHTML = "Don't forget to study hard!";
}

