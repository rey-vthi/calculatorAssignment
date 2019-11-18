const sum = require('../src/operator.js').sum;
const fibonacci = require('../src/operator.js').fibonacci;
const assert = require('assert');

describe("sum with increamenter",function(){
  it("should give summation for the given range of positive N numbers with step",function(){
    assert.equal(sum(0,0,1),0);
    assert.equal(sum(1,2,1),3);
    assert.equal(sum(1,5,2),9);
    assert.equal(sum(1,20,3),70);
    assert.equal(sum(1,100,5),970);
  });
});

describe("sum",function(){
  it("should give summation for the given range of negative N numbers with step",function(){
    assert.equal(sum(-1,2,1),2);
    assert.equal(sum(-3,5,2),5);
    assert.equal(sum(-2,2,2),0);
  });
});

describe("sum without increamenter",function(){
  it("should give summation for the given range of positive N numbers",function(){
    assert.equal(sum(0,0,1),0);
    assert.equal(sum(1,2,1),3);
    assert.equal(sum(1,100,1),5050);
  });
});

describe("sum without increamenter",function(){
  it("should five should give summation for the given range of negative N numbers",function(){
    assert.equal(sum(-1,1,1),0);
    assert.equal(sum(-2,2,1),0);
    assert.equal(sum(-3,5,1),9);
  });
});



describe("fibonacci Series",function(){
  it("should give fibonacci numbers to the given range",function(){
    assert.deepEqual(fibonacci(1,50),[1,1,2,3,5,8,13,21,34]);
    assert.deepEqual(fibonacci(1,5),[1,1,2,3,5]);
    assert.deepEqual(fibonacci(3,8),[3,5,8]);
  });
});
