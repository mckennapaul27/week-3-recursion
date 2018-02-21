var expect = require('chai').expect;
var {search} = require('../recursion-practice-2');
var {flatten} = require('../recursion-practice-2');

describe('search', function () {
    it('searches for a value in a flat array', function () {
        expect(search([1, 2, 3, 4], 3)).to.equal(1);
        expect(search([1, 2, 3, 4, 3], 3)).to.equal(2);
    });
    it('searches for a value in arbitrarily nested array', function () {
        expect(search([1, 2, 3, [1, 2, 3], 4, 5, [3, [3, [3]]]],3)).to.equal(5);
        
    });
});

describe('flatten', function () {
    it('flattens an array', function () {
        expect(flatten([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
        expect(flatten([1, 2, 3, [1], 3])).to.eql([1, 2, 3, 1, 3]);
    });    
    it('flattens an arbitralily nested array', function () {
        expect(flatten([1, 2, 3, [1, 2, 3], 4, 5, [3, [3, [3]]]])).to.eql([1, 2, 3, 1, 2, 3, 4, 5, 3, 3, 3]);        
    });    
});
