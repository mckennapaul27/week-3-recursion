function palindrome (str) {
    if (typeof str !== 'string') return false;
// Base case 
    str = str.match(/[A-Za-z]/g).join('').toLowerCase();  
// makes string only letters and lowercase    
    if (str[0] !== str[str.length - 1]) return false;
// first test - if first letter does not match last letter return false    
    else if (str.length === 1) return true;
// This covers odd digit length strings
    else if (str.length === 2 && str[0] === str[1]) return true;
// This covers even digit length strings    
  
// recursive case
  
    if (str.length > 2) {
       return palindrome(str.slice(1, -1));
    }
}

module.exports = {
    palindrome
};
