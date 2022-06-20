
let display=0;
let firstArray = [];
let secondArray= [];
let firstNum;
let secondNum;
let operator;
let result
let number = document.querySelector('#displayNum');
number.value = `${display}`;

//math functions//
const add = function(a,b) {  
    result = a+b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  const subtract = function(a,b) {
    result = a-b
    return(Number.isInteger(result)? result:result.toFixed(6));
  };

  const multiply = function(a, b) {
    result = a*b
    return (Number.isInteger(result)? result:result.toFixed(6));
  };

  const divide = function(a,b) {
    if(b===0){
      return result = "No, no, no... don\'t do that"
    }
    else {
      result = a/b
    }
    if(!Number.isInteger(result)){
      result.toFixed(6);
      return result.toString();
      
    }
    else{
      return result;
    }
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
zero.addEventListener('click',addZero)
function addZero(){
  if (operator===undefined){
    firstArray.push(0);
    firstNum = firstArray.join('');    
    return number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(0);
    secondNum = secondArray.join('');
    return number.value = `${secondNum}`;
    }  
};
  

let one = document.querySelector('#one');
one.addEventListener('click', addOne);
function addOne(){
  if (operator===undefined){
    firstArray.push(1);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(1);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};


let two = document.querySelector('#two');
two.addEventListener('click', addTwo);
function addTwo(){
  if (operator===undefined){
    firstArray.push(2);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(2);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  

};

let three = document.querySelector('#three');
three.addEventListener('click', addThree);
function addThree(){
  if (operator===undefined){
    firstArray.push(3);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(3);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }
};

let four = document.querySelector('#four');
four.addEventListener('click',addFour);
function addFour(){
  if (operator===undefined){
    firstArray.push(4);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(4);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};


let five = document.querySelector('#five');
five.addEventListener('click', addFive);
function addFive(){
  if (operator===undefined){
    firstArray.push(5);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(5);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};

let six = document.querySelector('#six');
six.addEventListener('click', addSix);
function addSix(){
  if (operator===undefined){
    firstArray.push(6);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(6);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};

let seven = document.querySelector('#seven');
seven.addEventListener('click', addSeven)
function addSeven(){
  if (operator===undefined){
    firstArray.push(7);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(7);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};

let eight = document.querySelector('#eight');
eight.addEventListener('click', addEight)
function addEight(){
  if (operator===undefined){
    firstArray.push(8);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{  
    secondArray.push(8);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};

let nine = document.querySelector('#nine');
nine.addEventListener('click', addNine)
function addNine(){
  if (operator===undefined){
    firstArray.push(9);
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
  }
  else{
    secondArray.push(9);
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }  
};

let floatingPoint = document.querySelector('#floatingPoint');
floatingPoint.addEventListener('click',addFloatingPoint);
function addFloatingPoint() {
  if (operator===undefined){
    if(!(firstArray.includes('.'))){
    firstArray.push('.');
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
    }
  }
  else{ 
    if(!(secondArray.includes('.'))){ 
    secondArray.push('.');
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }
  }
};

let backspace = document.querySelector('#backspace')
backspace.addEventListener('click', addBackspace)
function addBackspace(){
  if (operator===undefined){
    firstArray.pop();
    firstNum = firstArray.join('');    
    number.value = `${firstNum}`;
    
  }
  else{     
    secondArray.pop();
    secondNum = secondArray.join('');
    number.value = `${secondNum}`;
    }
  
};
//operatos//
let sum = document.querySelector('#add');
sum.addEventListener('click', addSum);
function addSum(){    
  if((!isNaN(parseInt(firstNum))&&!isNaN(parseInt(secondNum)))){
    if(firstArray.includes('.') || secondArray.includes('.')){
      number.value = `${operate(parseFloat(firstNum), parseFloat(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
    else{
      number.value = `${operate(parseInt(firstNum), parseInt(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
  }  
    operator = 'add';      
};

let sub = document.querySelector('#sub');
sub.addEventListener('click', addSub);
function addSub(){    
  if((!isNaN(parseInt(firstNum))&&!isNaN(parseInt(secondNum)))){
    if(firstArray.includes('.') || secondArray.includes('.')){
      number.value = `${operate(parseFloat(firstNum), parseFloat(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
    else{
      number.value = `${operate(parseInt(firstNum), parseInt(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
  }     
    operator = 'subtract'; 
};

let multi = document.querySelector('#multi');
multi.addEventListener('click', addMulti);
function addMulti(){    
  if((!isNaN(parseInt(firstNum))&&!isNaN(parseInt(secondNum)))){
    if(firstArray.includes('.') || secondArray.includes('.')){
      number.value = `${operate(parseFloat(firstNum), parseFloat(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
    else{
      number.value = `${operate(parseInt(firstNum), parseInt(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
  }   
    operator = 'multiply';  
};

let divi = document.querySelector('#divide');
divi.addEventListener('click', addDivi);
function addDivi(){    
  if((!isNaN(parseInt(firstNum))&&!isNaN(parseInt(secondNum)))){
    if(firstArray.includes('.') || secondArray.includes('.')){
      number.value = `${operate(parseFloat(firstNum), parseFloat(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
    else{
      number.value = `${operate(parseInt(firstNum), parseInt(secondNum))}`;
      firstNum = result;
      secondArray = [];
    }
  }    
    operator = 'divide';
};

let equal = document.querySelector('#equal')
equal.addEventListener('click', addEqual);
function addEqual(){
  if(firstArray.includes('.') || secondArray.includes('.')){
    number.value = `${operate(parseFloat(firstNum), parseFloat(secondNum))}`;
  }
  else{
    number.value = `${operate(parseInt(firstNum), parseInt(secondNum))}`;
  }

};

let clear = document.querySelector('#clear');
clear.addEventListener('click', addClear);
function addClear(){
  display=0;
  firstArray = [];
  secondArray= [];
  firstNum = undefined;  
  secondNum = undefined;  
  operator = undefined;
  result = undefined;
  number.value = 0
};

//keyboard support
window.addEventListener('keydown',function(e){
  switch(e.key){
    case ('0'): addZero(); break;
    case ('1'): addOne(); break;
    case ('2'): addTwo(); break;
    case ('3'): addThree(); break;
    case ('4'): addFour(); break;
    case ('5'): addFive(); break;
    case ('6'): addSix(); break;
    case ('7'): addSeven(); break;
    case ('8'): addEight(); break;
    case ('9'): addNine(); break;    
    case ('+'): addSum(); break;
    case ('-'): addSub(); break;
    case ('*'): addMulti(); break;
    case ('/'): addDivi(); break;
    case ('='): addEqual(); break;
    case ('Enter'): addEqual(); break;
    case ('Escape'): addClear(); break;
    case ('Backspace'): addBackspace(); break;
    case ('.'): addFloatingPoint(); break;
  }    
});