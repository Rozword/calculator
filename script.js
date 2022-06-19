
let display=0;
let firstNum = []
let first;
let second;
let secondNum= [];
let operator;
let result
let number = document.querySelector('#display');
number.textContent = `${display}`;

const add = function(a,b) {  
    result = a+b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  const subtract = function(a,b) {
    result = a-b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  const multiply = function(a, b) {
    result = a*b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  const divide = function(a,b) {
    (b===0)? result = "No, no, no... don\'t do that":result = a/b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  function operate(a, b){
    switch (operator){
        case ('add'):
            return add(a,b);
            
        case ('subtract'):
            return subtract(a,b);          

        case ('multiply'):
            return multiply(a,b);           

        case ('divide'):
          return divide(a,b); 
       
    }

  }



let zero = document.querySelector('#zero');
zero.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(0);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(0);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let one = document.querySelector('#one');
one.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(1);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(1);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let two = document.querySelector('#two');
two.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(2);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(2);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  

});
let three = document.querySelector('#three');
three.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(3);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(3);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }
});

let four = document.querySelector('#four');
four.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(4);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(4);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let five = document.querySelector('#five');
five.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(5);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(5);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let six = document.querySelector('#six');
six.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(6);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(6);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let seven = document.querySelector('#seven');
seven.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(7);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(7);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let eight = document.querySelector('#eight');
eight.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(8);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(8);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let nine = document.querySelector('#nine');
nine.addEventListener('click',function(e){
  if (operator===undefined){
    firstNum.push(9);
    first = firstNum.join('');    
    number.textContent = `${first}`;
  }
  else{  
  secondNum.push(9);
  second = secondNum.join('');
  number.textContent = `${second}`;
  }  
});

let sum = document.querySelector('#add');
sum.addEventListener('click', function(e){    
    if((!isNaN(parseInt(first))&&!isNaN(parseInt(second)))){
      number.textContent = `${operate(parseInt(first), parseInt(second))}`;
      first = result;
      secondNum = [];
    }
    operator = 'add';
      
})
let sub = document.querySelector('#sub');
sub.addEventListener('click', function(e){    
  if((!isNaN(parseInt(first))&&!isNaN(parseInt(second)))){
      number.textContent = `${operate(parseInt(first), parseInt(second))}`;
      first = result;
      secondNum = [];
    }   
    operator = 'subtract'; 
})
let multi = document.querySelector('#multi');
multi.addEventListener('click', function(e){    
  if((!isNaN(parseInt(first))&&!isNaN(parseInt(second)))){
      number.textContent = `${operate(parseInt(first), parseInt(second))}`;
      first = result;
      secondNum = [];
    }  
    operator = 'multiply';  
})
let divi = document.querySelector('#divide');
divi.addEventListener('click', function(e){    
  if((!isNaN(parseInt(first))&&!isNaN(parseInt(second)))){
      number.textContent = `${operate(parseInt(first), parseInt(second))}`;
      first = result;
      secondNum = [];
    }    
    operator = 'divide';
})
let equal = document.querySelector('#equal')
equal.addEventListener('click', function(e){
  
  number.textContent = `${operate(parseInt(first), parseInt(second))}`;

});

let clear = document.querySelector('#clear');
clear.addEventListener('click', function(e){
  display=0;
  firstNum = [];
  first = undefined;
  second = undefined;
  secondNum= [];
  operator = undefined;
  result = undefined;
  number.textContent = 0
})

