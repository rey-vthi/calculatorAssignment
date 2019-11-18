const calculate = require('./src/actionDecision.js').calculate;

const main = function(){
  const operator = process.argv[2];
  const firstNo = process.argv[3];
  const lastNo = process.argv[4];
  const step = process.argv[5];
  const result = calculate(operator,firstNo,lastNo,step);
  console.log(result);

};

main();
