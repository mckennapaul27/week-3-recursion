// 1. Make work with simple input
// 2. What would we pass on to a recursive call?

function search (arr, term) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
          count += search(arr[i], term);
        }
        if(arr[i] === term) count ++;
    }
    return count;
}

function flatten (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}





module.exports = {
    search,
    flatten
};