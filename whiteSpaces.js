
function whiteSpaces (str) {
    //Base case 
    if (!str.includes(' ')) return 0;

    //Recursive
    
    return 1 + whiteSpaces(str.split('').sort().slice(1).join(''))
    
}

module.exports = {
    whiteSpaces
}