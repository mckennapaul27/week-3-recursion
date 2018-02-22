function analyzeArray (arr, str, index) {
  arr.forEach(function(item, curIndex) {
    if (Array.isArray(item)) {       
      analyzeArray (item, str, curIndex);
    }  else if (index > 0) {
      console.log(str + '.' + index + '.' + curIndex + ': ' + item);
    } else {
      console.log(str + '.' + curIndex + ': ' + item);
    }
    
  });  
}

analyzeArray(['carrot', ['car', 'boat', 'plane'], 'turtle', ['house']], 'Position', 0);

module.exports = analyzeArray;

