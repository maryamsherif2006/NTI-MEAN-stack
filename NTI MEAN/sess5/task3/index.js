function  greetUser(user){
   console.log("Hello " + user);
   
}

var timer = setTimeout(function  greetUser(user){
   console.log("Hello " + user);
   
},3000)




function countdown() {
    var count = 10;   
    var timer = setInterval(function() {
        console.log(count);   
        count = count - 1;    
        if (count === 5) {
            console.log("Time's up!");
            clearInterval(timer);   
        }
        
    }, 1000);   
}

countdown();


var timer2 = setTimeout(function name(params) {
    console.log("This will be cleared!");
    
},5000);