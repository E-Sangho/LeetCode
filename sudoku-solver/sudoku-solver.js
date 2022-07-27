/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let findedAnswer = false;
  BackTrack(0, 0);

  function BackTrack (row, col) {
    if (row === 9) {
      for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
          if (board[i][j] === ".") {
            return;
          }
        }
      }
      findedAnswer = true;
      return;
    }
    
    if (board[row][col] === ".") {
      for (let i = 1; i <= 9; ++i) {
        if (
          IsValidRow(row, i) &&
          IsValidCol(col, i) &&
          IsValidBox(row, col, i) &&
          !findedAnswer
        ) {
          board[row][col] = `${i}`;
        
          if (col === 8) {
            BackTrack(row + 1, 0);
          } else {
            BackTrack(row, col + 1);
          }
          if (!findedAnswer) {
            board[row][col] = ".";
          }
        }
      }  
    } else {
      if (col === 8) {
        BackTrack(row + 1, 0);
      } else {
        BackTrack(row, col + 1);
      }
    }
  }    

  function IsValidRow (row, i) {
    for (let col = 0; col < 9; ++col) {
      if (board[row][col] === `${i}`) {
        return false;
      }
    }  
    return true;
  }

  function IsValidCol (col, i) {
    for (let row = 0; row < 9; ++row) {
      if (board[row][col] === `${i}`) {
        return false;
      }
    }
    return true;
  }

  function IsValidBox(row, col, i) {
    const BoxStartRow = Math.floor(row / 3),
          BoxStartCol = Math.floor(col / 3);  
    
    for (let cRow = 0; cRow < 3; ++cRow) {
      for (let cCol = 0; cCol < 3; ++cCol) {
        if (board[cRow + BoxStartRow * 3][cCol + BoxStartCol * 3] === `${i}`) {
          return false;
        }
      }
    }
    return true;
  }
};