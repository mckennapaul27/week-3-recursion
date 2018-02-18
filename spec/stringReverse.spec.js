const {expect} = require('chai');
const {stringReverse} = require('../stringReverse');

describe.only('stringReverse', function () {
    it('Should return an empty string if not passed a string', function () {
        expect(stringReverse({})).to.equal('');  
        expect(stringReverse(1)).to.equal('');  
        expect(stringReverse([])).to.equal('');               
    }); 
    it('Should return a string', function () {
        expect(stringReverse('')).to.be.an('string');                 
    });     
    it('Should return string reversed', function () {
        expect(stringReverse('hello world')).to.equal('dlrow olleh');                 
    }); 
});
