

function fibonacci (num) {
    // Base case
    if (num <= 3) return 1;

    return fibonacci(num -2) + fibonacci(num -1);
}

module.exports = {
    fibonacci
}