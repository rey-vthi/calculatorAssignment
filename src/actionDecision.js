const sum = require('./operator.js').sum;
const fibonacci = require('./operator.js').fibonacci;
const expectedOperator = {"sum":sum,"fibonacci":fibonacci};

const isValidOperator = function(operator){
  return ["sum","fibonacci"].includes(operator);
};

const swap = function(firstNum,secondNum){
  return [secondNum,firstNum];
};

const areValidNumbers= function(number1,number2,step){
  return +number1%1==0  && +number2%1==0 && +step%1==0;
}

const validateInput = function(operator,start,end,step){
  if(!isValidOperator(operator) || !areValidNumbers(start,end,step)){
    return false;
  }
  return true;
}

const calculate = function(operator,start,end,increamenter){
  if(increamenter == undefined){
    increamenter=1;
  }
  if(validateInput(operator,start,end,increamenter)){
    if(+start>+end){
    numbers = swap(+start,+end);
      start = numbers[0];
      end = numbers[1];
    }
    action = expectedOperator[operator]
    return action(+start,+end,+increamenter);
  }
  return 0;
};

exports.calculate = calculate;
