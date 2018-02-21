// Find the maximum element in an array of integers 

function maxInteger (array) {

    // edge case
    if ((Array.isArray(array) && array.length === 0) || (!Array.isArray(array))) return 0;
    
    // base case 

    if (array.length === 1) return array[0];

    // what does the function do
   if (array[0] < array[1]) {array.splice(0, 1);}
   else {array.splice(1, 1);}
    
   // recursive case
   return  maxInteger(array);
 
}

module.exports = maxInteger;