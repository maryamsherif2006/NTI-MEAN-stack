function multiply(a,b){
  return a*b;
}

function calculate(x, y, operation) {
    return operation(x, y);
}


console.log(calculate(5, 3, multiply));