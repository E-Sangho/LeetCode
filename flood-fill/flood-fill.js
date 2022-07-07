/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  return DFS(image, sr, sc, color);
};

function DFS(image, sr, sc, color) {
  const moveX = [0, 0, 1, -1],
        moveY = [1, -1, 0, 0];
  const MAX_ROW = image.length,
        MAX_COL = image[0].length;
  const marked = new Array(MAX_ROW).fill().map(() => new Array(MAX_COL).fill(false));
  const targetColor = image[sr][sc]; 
  

  marked[sr][sc] = true;
  image[sr][sc] = color;
  UtilDFS(sr, sc);
  
  return image;

  function UtilDFS(curRow, curCol) {
    for (let i = 0; i < 4; ++i) {
      let newRow = curRow + moveX[i],
          newCol = curCol + moveY[i]; 
      
      if (
        isInBox(newRow, newCol) && 
        !marked[newRow][newCol] && 
        image[newRow][newCol] === targetColor
      ) {
        image[newRow][newCol] = color;
        marked[newRow][newCol] = true;
        UtilDFS(newRow, newCol);
      }
    }
  }
  
  function isInBox(row, col) {
    if (
      0 <= row && row < MAX_ROW &&
      0 <= col && col < MAX_COL
    ) {
      return true; 
    }
    
    return false
  }
}

