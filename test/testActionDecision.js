const assert = require('assert');
const calculate = require('../src/actionDecision.js').calculate;

describe("validate and evaluate inputs",function(){
  it("should validat all positive and negative numbers",function(){
    assert.equal(calculate("sum","1","2","1"),3);
    assert.equal(calculate("sum","1","100","5"),970);
  });
});



describe("validate and evaluate Invalid  inputs",function(){
  it("should not take other than numbers",function(){
    assert.equal(calculate("sum","a","2","2"),0);
    assert.equal(calculate("sum","1","a","0"),0);
  });
});


describe("validate and evaluate inputs",function(){
  it("should validat all positive and negative numbers when step is not given",function(){
    assert.equal(calculate("sum","1","2"),3);
    assert.equal(calculate("sum","1","100"),5050);
  });
});


describe("validate and evaluate,when the numbers are in decreasing order inputs",function(){
  it("should validat all positive and negative numbers when step is not given",function(){
    assert.equal(calculate("sum","100","1"),5050);
    assert.equal(calculate("sum","3","1"),6);
  });
});


describe("validate and evaluate,when the numbers are in decreasing order inputs",function(){
  it("should validat all positive and negative numbers when step is not given",function(){
    assert.equal(calculate("sum","100","1","5"),970);
    assert.equal(calculate("sum","100","1","1"),5050);
    assert.equal(calculate("sum","100","3","1"),5047);
  });
});


describe("fibonacci",function(){
  it("should give fibonacci series of the given range",function(){
    assert.deepEqual(calculate("fibonacci","1","50"),[1,1,2,3,5,8,13,21,34]);
    assert.deepEqual(calculate("fibonacci","0","3"),[0,1,1,2,3]);
    assert.deepEqual(calculate("fibonacci","3","4"),[3]);
  });
});
