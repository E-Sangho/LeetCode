/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  
  return Pascal([1], 0);
  
  function Pascal(curRow, depth) {
    // finish condition
    if (depth === rowIndex) {
      return curRow;
    }

    // create Next row
    const N = curRow.length;
    let newRow = new Array(N);

    for (let i = 0; i < N + 1; ++i) {
      if (i === 0 || i === N) {
        newRow[i] = 1;
        continue;
      }
      newRow[i] = curRow[i - 1] + curRow[i];
    }
    return Pascal(newRow, depth + 1);    
  }
};