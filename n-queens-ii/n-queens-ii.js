/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let QueenPlace = new Set();
  let count = 0;

  Recursion(0);

  return count;
  
  function Recursion(row) {
    if (row === n) {
      ++count;
      return; 
    }
    
    for (let col = 0; col < n; ++col) {
      if (IsPlaceable(row, col)) {
        const rowcol = [row, col]
        Place(rowcol)     
        Recursion(row + 1);
        Remove(rowcol);
      }  
    }
    
  }
  
  function IsPlaceable (row, col) {
    for (const item of QueenPlace.keys()) {
      const [qRow, qCol] = item; 
      
      if (row === qRow || col === qCol) {
        return false;
      }
      
      if (Math.abs(qCol - col) === Math.abs(qRow- row)) {
        return false;
      }
    }
    return true;
  }
  
  function Place(rowcol) {
    QueenPlace.add(rowcol);
  }
  
  function Remove(rowcol) {
    QueenPlace.delete(rowcol);
  }
};