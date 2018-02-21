const expect = require('chai').expect;
const countZeros = require('../countZeros');


describe('countZeros', function () {
    it('returns a number', function () {
        expect(countZeros([])).to.be.an('number');
    });
    it('returns zero if not passed an array of integers', function () {
        expect(countZeros('')).to.eql(0);
        expect(countZeros(1)).to.eql(0);
    });
    it('returns 1 if the array contains one 0', function () {
        expect(countZeros([10, 2, 3,])).to.eql(1);
    });
    it('returns 2 if the array contains two zeros', function () {
        expect(countZeros([10, 20, 3,])).to.eql(2);
    });
    it('returns 3 if the array contains three zeros', function () {
        expect(countZeros([10, 20, 30,])).to.eql(3);
    });
    it('returns correct number if the array contains more than one zero in a number', function () {
        expect(countZeros([10, 200, 30,])).to.eql(4);
    });
}); 