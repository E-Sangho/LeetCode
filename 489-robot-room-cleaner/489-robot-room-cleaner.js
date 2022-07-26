/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  let marked = new Set();
  const moveR = [1, 0, 0, -1],
        moveC = [0, 1, -1, 0];
  let TurnRight = new Map();
  TurnRight.set("up", "right");
  TurnRight.set("right", "down");
  TurnRight.set("down", "left");
  TurnRight.set("left", "up");
  
  BackTracking(0, 0, "up");
  BackTracking(0, 0, "right");
  BackTracking(0, 0, "down");
  BackTracking(0, 0, "left");
  
  // direction in {up, right, down, left}
  function BackTracking(row, col, direction) {
    if (!marked.has(`${row} ${col}`)) {
      marked.add(`${row} ${col}`);
      robot.clean();
      
      let nextRow, nextCol;
      // search front
      for (let i = 0; i < 4; ++i) {
        [nextRow, nextCol] = NextPlace(row, col, direction);
        if (!marked.has(`${nextRow} ${nextCol}`) && robot.move()) {
          BackTracking(nextRow, nextCol, direction);
          GoBack();
        }
        
        direction = TurnRight.get(direction);
        robot.turnRight();
      }
    }
  }
  
  function GoBack() {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
    
  function NextPlace (row, col, direction) {
    if (direction === "up") {
      return [row - 1, col];
    }
    
    if (direction === "right") {
      return [row, col + 1];
    }
    
    if (direction === "down") {
      return [row + 1, col];
    }
    
    if (direction === "left") {
      return [row, col - 1];
    }
  }
  
};