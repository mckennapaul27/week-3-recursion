const {expect} = require('chai');
const {fibonacci} = require('../fibonacci.js');

describe('fibonacci', function () {
    it('If number is less than 2 it returns 1', function () {
        expect(fibonacci(1)).to.equal(1);
        expect(fibonacci(0)).to.equal(1);        
    });

    it('returns the correct number in the fibonacci sequence', function () {
        expect(fibonacci(2)).to.equal(1);
        expect(fibonacci(7)).to.equal(8);
        expect(fibonacci(9)).to.equal(21);
        expect(fibonacci(10)).to.equal(34);
    });

});