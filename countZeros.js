/* Count the number of zeros in an array of integers
Eg.
javascript
countZeros([1]) --> 0
```countZeros([0,100]) --> 3 */

function countZeros (array) {

    // base case
    
    if (!Array.isArray(array)) return 0;
    
    else if (Array.isArray(array) && array.length === 0) return 0;
    
    // what function doing
    // recursive case
    
    return /[0]/g.test(array[0].toString()) ? array[0].toString().match(/[0]/g).length + countZeros(array.slice(1)) : 0 + countZeros(array.slice(1));
    
    }
    
    module.exports = countZeros;