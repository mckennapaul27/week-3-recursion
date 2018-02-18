const {expect} = require('chai');
const {sumDigits} = require('../sumDigits');

describe.only('sumDigits', function () {
    it('Should return a number', function () {
        expect(sumDigits(1)).to.be.an('number');                 
    });  
    it('Should return 0 if a number is not passed in', function () {         
        expect(sumDigits({})).to.equal(0);   
        expect(sumDigits('')).to.equal(0);   
        expect(sumDigits([])).to.equal(0);               
    }); 
    it('Should sum the digits of a number until only one digit remains', function () {
        expect(sumDigits(11)).to.equal(2);     
        expect(sumDigits(99)).to.equal(9); 
        expect(sumDigits(125)).to.equal(8);
        expect(sumDigits(369)).to.equal(9);                      
    }); 
});
