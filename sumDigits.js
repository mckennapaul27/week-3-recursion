/*
sumDigits(11) --> 2
// 1 + 1 = 2
sumDigits(99) --> 9 
// 9 + 9 = 18, 1 + 8 = 9
*/

function sumDigits (num) {
    if (typeof num !== 'number') return 0;

    // base case
    if (num.toString().length === 1) return parseInt(num);  

    // recursive case
    return num.toString().split('').reduce(function (acc, num) {
        acc += parseInt(num);
        return sumDigits(acc);
    }, 0);

}

module.exports = {
    sumDigits
};
