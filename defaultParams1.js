cribe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    let number = (int=0) => int;
    
    assert.equal(number(), 0);
  });

  it('it is used when undefined is passed', function() {
    let number = (int = 23) => int;
    const param = undefined;
    
    assert.equal(number(param), 23);
  });

  it('it is not used when a value is given', function() {
    function xhr(method='GET') {
      return method;  
    }
    
    assert.equal(xhr('POST'), 'POST');
  });

  it('it is evaluated at run time', function() {
    let defaultValue;
    function xhr(method = `value: ${42}`) { //instead of passing defaultValue
      return method;  
    }
    
    assert.equal(xhr(), 'value: 42');
    // defaultValue = 42;
  });

  it('it can also be a function', function() {
    let defaultValue = () => {};
    function fn(value = defaultValue()) {
      return value;  
    }
    
    assert.equal(fn(), defaultValue());
  });
  
});
