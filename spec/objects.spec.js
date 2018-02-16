var expect = require('chai').expect;
var {search, flatten} = require('../objects');
var {searchObj} = require('../objects');

describe.only('searchObj', function () {
    it('returns true if it finds a value in a flat object', function () {
        expect(searchObj({
            name: 'foo',
            age: 12,
            bar: 'foobar cat dog'
        }, 'cat')).to.be.true;
        expect(searchObj({
            name: 'foot',
            age: 12,
            bar: 'foobar cat dog'
        }, 'foot')).to.be.true;
    });

    it('returns false if it doesn\'t find a value in a flat object', function () {
        expect(searchObj({
            name: 'foo',
            age: 12,
            bar: 'foobar cat dog'
        }, 'pineapple')).to.be.false;
        expect(searchObj({
            name: 'foot',
            age: 12,
            bar: 'foobar cat dog'
        }, 'ghost')).to.be.false;
    });

    it('returns true if it finds value in a nested object', function () {
        expect(searchObj({
            foo: 'bar',
            bar: {
                a: 'cat',
                b: 'ghost cat shark'
            },
            cat: 'spider'
        }, 'shark')).to.be.true;       
    });

});

