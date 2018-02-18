
function sumsInteger (num) {
    //Base case 
    if(typeof num !== 'number') return 0;
    if (num <= 1) return 1;

    //Recursive    
    return num + sumsInteger(num-1)

    //simply returns the num and calls again with num-1
    
 }

module.exports = {
    sumsInteger
}