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
  const MAX_ROW = image.length,
        MAX_COL = image[0].length;
  const targetColor = image[sr][sc]; 
  
  if (color === targetColor) {
    return image;
  }

  UtilDFS(sr, sc);
  
  return image;

  function UtilDFS(curRow, curCol) {
    if (image[curRow][curCol] === targetColor) {
      image[curRow][curCol] = color;
      if (curRow >= 1) UtilDFS(curRow - 1, curCol);
      if (curRow + 1 < MAX_ROW) UtilDFS(curRow + 1, curCol);
      if (curCol >= 1) UtilDFS(curRow, curCol - 1);
      if (curCol + 1 < MAX_COL) UtilDFS(curRow, curCol + 1);
    }
  }
}

