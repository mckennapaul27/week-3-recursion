const {expect} = require('chai');
const {whiteSpaces} = require('../whiteSpaces');

describe('whiteSpaces', function () {
    // it('Should return a number', function () {
    //     expect(whiteSpaces('')).to.be.an('number');             
    // });

    it('Should return the count of white spaces in the given string', function () {
        // expect(whiteSpaces('Hello World')).to.equal(1);  
        expect(whiteSpaces('Implement a function that counts the number of white spaces in a string')).to.equal(12);   
        // expect(whiteSpaces('H     e  l  l  o')).to.equal(11);         
        // expect(whiteSpaces('               ')).to.equal(15);   
    });

});