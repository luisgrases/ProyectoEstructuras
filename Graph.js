var Graph = (function() {
  var init = function(vertices) {
    this.vertices = vertices || [];
  };

  var dijkstra = function(origin) {
    var unprocessedVertices = this.vertices;
    origin.distanceFromOrigin = 0;
    while (unprocessedVertices.length > 0) {
      var vertexWithLowestDistanceFromOrigin = extractVertexWithLowestDistanceFromOrigin(unprocessedVertices);
      vertexWithLowestDistanceFromOrigin.outgoingEdges.forEach(function(outgoingEdge) {
        relax(vertexWithLowestDistanceFromOrigin, outgoingEdge);
      });
    }
  };
  // extract
  function extractVertexWithLowestDistanceFromOrigin(vertices) {
    var vertex = findVertexWithLowestDistanceFromOrigin(vertices);
    return vertices.splice(vertices.indexOf(vertex), 1)[0];
  }

  function findVertexWithLowestDistanceFromOrigin(vertices) {
    var currentVertexWithLowestDistanceFromOrigin = { distanceFromOrigin: Infinity };
    vertices.forEach(function(vertex) {
      if (vertex.distanceFromOrigin < currentVertexWithLowestDistanceFromOrigin.distanceFromOrigin) {
        currentVertexWithLowestDistanceFromOrigin = vertex;
      }
    });
    return currentVertexWithLowestDistanceFromOrigin;
  }

  function relax(vertex, outgoingEdge) {
    if (outgoingEdge.pointingVertex.distanceFromOrigin > vertex.distanceFromOrigin + outgoingEdge.weight) {
      outgoingEdge.pointingVertex.distanceFromOrigin = vertex.distanceFromOrigin + outgoingEdge.weight;
      outgoingEdge.pointingVertex.parent = vertex;
    }
  }

  var showPath = function(vertexFrom, vertexTo) {
    let result = "";
    var currentVertex = vertexTo;
    result += currentVertex.value;
    while (currentVertex.parent) {
      result = currentVertex.parent.value + " --> " + result;
      currentVertex = currentVertex.parent;
    }
    return currentVertex.value === vertexFrom.value ? result : "There is no path possible";
  };

  var showTotalWeightFromOrigin = function(vertexTo) {
    return vertexTo.distanceFromOrigin;
  };

  return {
    init: init,
    dijsktra: dijkstra,
    showPath: showPath,
    showTotalWeightFromOrigin: showTotalWeightFromOrigin
  };
})();

exports.default = Graph;
