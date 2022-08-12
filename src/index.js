
// You should implement your task here.

module.exports = function towelSort (matrix) {
  resultArr = [];
  if (typeof matrix === 'undefined' || matrix.length === 0) return [];
  for (i = 0; i < matrix.length; i++) {
    i % 2 === 0 ?  resultArr.push(...matrix[i]) : resultArr.push(...matrix[i].reverse());
  }
  return resultArr;  
}
