const expect = require('chai').expect;
const deepFreeze = require('../deepFreeze');

describe.only('deepFreeze', function () {
    it('freezes a single level array', function () {
        let unfrozenArray1 = ['a', 'b', 'c', 'd', 'e'];
        let frozenArray1 = deepFreeze(unfrozenArray1);
        frozenArray1[2] = 6;
        expect(frozenArray1).to.eql(['a', 'b', 'c', 'd', 'e']);
    });
    it('freezes a two level array', function () {
        let unfrozenArray2 = [ 'a', ['b', 'c'], 'd', 'e'];
        let frozenArray2 = deepFreeze(unfrozenArray2);
        frozenArray2[1][0] = 5;
        expect(frozenArray2).to.eql([ 'a', ['b', 'c'], 'd', 'e']);
    });
    it('freezes a three level array', function () {
        let unfrozenArray3 = ['a', ['b' , ['c'], 'd'], 'e'];
        let frozenArray3 = deepFreeze(unfrozenArray3);
        frozenArray3[1][1][0] = 7;
        expect(frozenArray3).to.eql(['a', ['b' , ['c'], 'd'], 'e']);
    });
    it('freezes a four level array', function () {
        let unfrozenArray4 = ['a', ['b', ['c', ['d'], 'e'], 'f'],'g'];
        let frozenArray4 = deepFreeze(unfrozenArray4);
        frozenArray4[1][1][1][0] = 8;
        expect(frozenArray4).to.eql(['a', ['b', ['c', ['d'], 'e'], 'f'],'g']);
    });
    it('freezes a single level object', function () {
        let unfrozenObject1 = {1: 'a', 2: 'b', 3: 'c', 4: 'd'};
        let frozenObject1 = deepFreeze(unfrozenObject1);
        frozenObject1[2] = 'w'
        expect(frozenObject1).to.eql({1: 'a', 2: 'b', 3: 'c', 4: 'd'});
    });
    it('freezes a two level object', function () {
        let unfrozenObject2 = {1: 'a', 2: { 3: 'b'}, 4: 'c'};
        let frozenObject2 = deepFreeze(unfrozenObject2);
        frozenObject2[2][3] = 'x';
        expect(frozenObject2).to.eql({1: 'a', 2: { 3: 'b'}, 4: 'c'});
    });
    it('freezes a three level object', function () {
        let unfrozenObject3 = {1: 'a', 2: {3: 'b', 4: {5: 'c'}, 6: 'd'}, 7: 'e'};
        let frozenObject3 = deepFreeze(unfrozenObject3);
        frozenObject3[2][4][5] = 'y';
        expect(frozenObject3).to.eql({1: 'a', 2: {3: 'b', 4: {5: 'c'}, 6: 'd'}, 7: 'e'});
    });
    it('freezes a four level object', function () {
        let unfrozenObject4 = {1: 'a', 2: {3: 'b', 4: {5: 'c', 6: {7: 'd'}, 8: 'e'}, 9: 'f'}, 10: 'g'};
        let frozenObject4 = deepFreeze(unfrozenObject4);
        frozenObject4[2][4][6][7] = 'y';
        expect(frozenObject4).to.eql({1: 'a', 2: {3: 'b', 4: {5: 'c', 6: {7: 'd'}, 8: 'e'}, 9: 'f'}, 10: 'g'});
    });
    it.only('freezes an array of nested objects', function () {
        let unfrozenArrOfObj1 = [{num1: 'a'}, {num2: 'b', num3: 'c'}, {num4: {num5: 'd'}}];
        let frozenArrOfObj1 = deepFreeze(unfrozenArrOfObj1);
        frozenArrOfObj1[2].num4.num5 = 'y';
        expect(frozenArrOfObj1).to.eql([{num1: 'a'}, {num2: 'b', num3: 'c'}, {num4: {num5: 'd'}}]);
    });
    it('freezes object containing an array', function () {
        let unfrozenArrOfObj2 = {backgroundcolor: '#000', color: '#fff', weekdays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri']};
        let frozenArrOfObj2 = deepFreeze(unfrozenArrOfObj2);
        frozenArrOfObj2.weekdays[1] = 'notMonday';
        expect(frozenArrOfObj2).to.eql({backgroundcolor: '#000', color: '#fff', weekdays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri']});
    });
    it('freezes object containing an array containing a nested object', function () {
        let unfrozenArrOfObj3 = {backgroundcolor: '#000', color: '#fff', weekdays: ['sun', {mon: {am: '10am', pm: '10pm'}}, 'tue', 'wed', 'thu', 'fri', 'sat']};
        let frozenArrOfObj3 = deepFreeze(unfrozenArrOfObj3);
        unfrozenArrOfObj3.weekdays[1].pm = '11pm';
        expect(frozenArrOfObj3).to.eql({backgroundcolor: '#000', color: '#fff', weekdays: ['sun', {mon: {am: '10am', pm: '10pm'}}, 'tue', 'wed', 'thu', 'fri', 'sat']});
    });
    it('freezes a nested array of nested objects of nested arrays of nested objects', function () {
        let unfrozenGoneTooFar = ['a', ['b', ['c', [{1: 'a', 2: {3: 'b', 4: {5: 'c', 6: {7: ['a', ['b', ['c', ['d'], 'e'], 'f'],'g']}, 8: 'e'}, 9: 'f'}, 10: 'g'}], 'e'], 'f'], 'g'];
        let frozenGoneTooFar = deepFreeze(unfrozenGoneTooFar);
        unfrozenGoneTooFar[1][1][1][0][2]['4'] = 'MODIFIED';
        expect(frozenGoneTooFar).to.eql(['a', ['b', ['c', [{1: 'a', 2: {3: 'b', 4: {5: 'c', 6: {7: ['a', ['b', ['c', ['d'], 'e'], 'f'],'g']}, 8: 'e'}, 9: 'f'}, 10: 'g'}], 'e'], 'f'], 'g']);
    });    
});
