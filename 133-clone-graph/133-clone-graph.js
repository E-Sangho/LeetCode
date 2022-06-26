/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
/*
    1. 노드 방문  
    2-a) 노드를 방문한적 있을 경우. return;
    2-b) 노드를 방문한적 없을 경우 => 새로운 노드를 만든다.
        3-a) 이웃 노드를 방문한적 없을 경우
             이웃한 노드를 방문 => 1
             이웃한 노드를 neighbors에 추가한다.
        3-b) 이웃 노드를 방문했었을 경우  
             기록해둔 이웃 노드를 가져와서 neighbors에 추가한다.
 */
var cloneGraph = function(node) {
    return DFS(node);
};

function DFS(node) {

    let visited = new Set();
    let nodeData = new Map();
    let root = DFSUtil(node);
    return root;
    
    function DFSUtil(node) {
        if (node === null) {
          return null;
        }
        if (visited.has(node.val)) {
            return nodeData.get(node.val);
        }
        
        let curNode = new Node(node.val);     
        nodeData.set(node.val, curNode);
        visited.add(node.val);
        
        for (let neighbor of node.neighbors) {
            curNode.neighbors.push(DFSUtil(neighbor));
        }
        
        return curNode;
    }
}

