const Edge = require("./Edge").default;

var Vertex = (function() {
  var init = function(value) {
    this.value = value;
    this.outgoingEdges = [];
    this.parent = null;
    this.distanceFromOrigin = Infinity;
  };

  var pointToVertex = function(vertex, weight) {
    var newEdge = Object.create(Edge);
    newEdge.init(vertex, weight);
    this.outgoingEdges.push(newEdge);
  };

  return {
    init: init,
    pointToVertex: pointToVertex
  };
})();

exports.default = Vertex;
