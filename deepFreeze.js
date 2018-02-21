function deepFreeze (arr) {
    
    // what is the function doing?
var newArr = Object.freeze(arr);
   
    // if arr is an array 
    if (Array.isArray(arr)) {
    // base case array
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {  
            // recursive case     
                deepFreeze(arr[i]);
            }
            else if (typeof arr[i] === 'object') {
                // base case object                        
                  if (typeof arr[i] === 'object') {
                      deepFreeze(arr[i]);
                  }   
                  var propNames = Object.getOwnPropertyNames(arr[i]);
                  propNames.forEach(function(prop) {          
                      var valu = arr[i][prop];          
                      if (typeof valu === 'object') {
                          deepFreeze(valu);
                      }
                  });
                }
        }
    }

    // if arr is an object
    else if (typeof arr === 'object') {
    // base case object      
      var props = Object.getOwnPropertyNames(arr);      
      props.forEach(function(prop) {          
          var val = arr[prop];          
          if (typeof val === 'object') {
              deepFreeze(val);
          }
          else if (Array.isArray(val)) {
            deepFreeze(val);
          }
      });
    }
    
return newArr;
}

module.exports = deepFreeze;
