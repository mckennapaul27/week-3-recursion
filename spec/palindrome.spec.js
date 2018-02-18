const {expect} = require('chai');
const {palindrome} = require('../palindrome');

describe.only('palindrome', function () {
    it('Should return false if not passed a string', function () {
        expect(palindrome([])).to.be.false;   
        expect(palindrome({})).to.be.false;  
        expect(palindrome(1)).to.be.false;         
    });

    it('If string is a palindrome return true', function () {
        expect(palindrome('racecar')).to.be.true;        
        expect(palindrome('Anna')).to.be.true;            
    });    

    it('If string is not a palindrome return false', function () {        
        expect(palindrome('northcoders')).to.be.false;                  
    });   
});
