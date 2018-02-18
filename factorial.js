// factorial of 4 => 4*3*2*1

function factorial (num) {
    if( num <= 1) return 1;

    return num * factorial(num -1);
}

module.exports = {
    factorial
}


factorial(10);




