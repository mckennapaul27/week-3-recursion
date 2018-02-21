
function stringReverse (str) {
    if (typeof str !== 'string') return '';
    var newStr = str.slice(-1);
    if (typeof str !== 'string') return newStr;
    // need to loop through str and return new str starting with last index  to first index
    // base case
    if (str.length === 0) return '';    
    return newStr + stringReverse(str.slice(0, -1)); 
}   

module.exports = {
    stringReverse
};

