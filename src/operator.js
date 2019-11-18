const sum = function(first,last,step){
  let summation = 0;
  for(let currentNum = first; currentNum<=last;currentNum= currentNum+step){
    summation = summation + currentNum;
  }
  return summation;
};

const fibonacci = function(from,to){
  let t1 = 0;
  let t2 =1;
  let series = [];
  while(t1<=to){
    if(t1>=from){
      series.push(t1);
    }
    nextTerm = t1+t2;
    t1 = t2;
    t2 = nextTerm;
    }
  return series;
};

exports.sum = sum;
exports.fibonacci = fibonacci;
