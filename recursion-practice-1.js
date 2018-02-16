// Recursive practice / notes

// function log (n, msg) {
//     if(n === 0) return;

//     console.log('Logging ' + msg);

//     log(n - 1, msg);
// }

// function sum (n) {
//   // Base case
//   if (n <= 1) return n;
//   //recursive case
//    return n + sum (n - 1);
// }

// console.log(sum(5));


// function exp (n, pow) {
//     // base case
//     if (pow <= 1) return n;

//     // recursive
//     return n * exp(n, pow - 1);
    
// }

// console.log(exp(2, 5)); // 2*2*2*2

//key point here is that we have to wait until value of n is returned (when it hits 1) before we then apply th value of n to each stack call

/*
exp(2, 1) --> 2 * 2 = 4
exp(2, 2) --> 2 * ?
exp(2, 3) --> 2 * ?
exp(2, 4) --> 2 * ?

Once it gets to exp(2, 1) we then return n which is value of 2. We can then change the ? to a 2 for preceeding stacks and sum them all together so new stack looks like this

exp(2, 1) --> 2 * 2 = 4
exp(2, 2) --> 2 * 2 = 4
exp(2, 3) --> 2 * 2 = 4
exp(2, 4) --> 2 * 2 = 4

Now add all the sums of the calls together to get 16

*/

function countLength (str) {
    // base case
    if (!str) return 0;

    //recursive & solve problem
    return 1 + countLength(str.slice(1))
}

console.log(countLength('hello world')); // 5


// countLength('hello') -- > 1 
// + countLength('ello') -- > 1 
// + countLength('llo') -- > 1 
// + countLength('lo') -- > 1 
// + countLength('o') -- > 1 
// + countLength('') --> 0

// sum together total recursive calls and you get 5

