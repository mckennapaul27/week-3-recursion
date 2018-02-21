const {expect} = require('chai');
const {sumsInteger} = require('../sumsInteger');

describe('sumsInteger', function () {
    it('Should return a number', function () {
        expect(sumsInteger(1)).to.be.an('number'); 
        expect(sumsInteger([1])).to.equal(0);            
    });

    it('Should sum the integers 1 through n', function () {
        expect(sumsInteger(5)).to.equal(15);  
        expect(sumsInteger(1)).to.equal(1);   
        expect(sumsInteger(3)).to.equal(6);         
        expect(sumsInteger(10)).to.equal(55);   
    });

});
