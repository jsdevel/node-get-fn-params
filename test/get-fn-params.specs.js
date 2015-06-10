'use strict';

describe('get-fn-params', function(){
  var sut = require('../lib/get-fn-params');

  [
    [function(a,b,c){}, ['a', 'b', 'c']],
    [function asdfaksdfjlaskdjfl(

        a,


        b,c){}, ['a', 'b', 'c']],
    ['(a,\n\n\n\n    b,\n\nc    )', ['a', 'b', 'c']],
    [[], []],
    [null, []],
    [undefined, []],
    ['     ', []],
  ].forEach(function(spec) {
    var proposal = spec[0];
    var expectedResult = JSON.stringify(spec[1]);

    it('should return ' + expectedResult + ' when given ' + proposal, function() {
      var result = sut(proposal);
      console.log(result);
      JSON.stringify(result).should.equal(expectedResult);
    });
  });
});
