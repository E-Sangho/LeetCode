/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  return DFS(rooms);    
};

function DFS(rooms) {
  let marked = new Set();
  let stack = [0];
  marked.add(0);
  
  while (stack.length > 0) {
    let top = stack.pop();
    
    for (let key of rooms[top]) {
      if (!marked.has(key)) {
        marked.add(key);
        stack.push(key);
      }
    }
  }
  
  for (let i = 0; i < rooms.length; ++i) {
    if (!marked.has(i)) {
      return false;
    }
  }
  
  return true;
}