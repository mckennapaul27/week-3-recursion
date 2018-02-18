const {expect} = require('chai');
const {factorial} = require('../factorial');

describe('factorial', function () {
    it('returns 1 for inputs <= 1', function () {
        expect(factorial(1)).to.equal(1);
        expect(factorial(0)).to.equal(1);
        expect(factorial(-1)).to.equal(1);
    });
    it('returns the factorial for inputs > 0', function () {
        expect(factorial(2)).to.equal(2);
        expect(factorial(3)).to.equal(6);
        expect(factorial(4)).to.equal(24);
    });

});