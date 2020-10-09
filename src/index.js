

module.exports = function towelSort (matrix =[]) {
  function sortArray (argArray = [], isIncreasing = true) {
    isIncreasing ? argArray.sort( (a,b) => a-b) : argArray.sort( (a,b) => b-a)    
     return  argArray;
   }

  let resultArray = [];
  matrix.forEach( (element, index) => {    
    Array.isArray(element) ? resultArray.push(...sortArray(element, !(index & 1))) : resultArray.push(element);
  });
  return resultArray;
}


