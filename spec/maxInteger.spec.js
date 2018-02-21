const expect = require('chai').expect;
const maxInteger = require('../maxInteger');

describe('maxInteger', function () {
    it('returns a number', function () {
        expect(maxInteger([])).to.be.an('number');
    });
    it('returns a zero when not passed an array', function () {
        expect(maxInteger({})).to.eql(0);
        expect(maxInteger('')).to.eql(0);
        expect(maxInteger(2)).to.eql(0);
    });
    it('returns the only number in the array if the array only contains one element ', function () {
        expect(maxInteger([2])).to.eql(2);
    });
    it('returns the higher of two numbers in the array if array contains two numbers ', function () {
        expect(maxInteger([2, 1])).to.eql(2);
    });
    it('returns the highest of three numbers in the array', function () {
        expect(maxInteger([3, 1, 5])).to.eql(5);
    });
    it('returns the highest of four numbers in the array', function () {
        expect(maxInteger([3, 1, 5, 2])).to.eql(5);
    });
    it('returns the highest of five numbers in the array', function () {
        expect(maxInteger([3, 1, 5, 2, 153])).to.eql(153);
    });
});