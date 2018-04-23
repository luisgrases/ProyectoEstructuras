var Edge = (function() {
  var init = function(pointingVertex, weight) {
    this.pointingVertex = pointingVertex;
    this.weight = weight;
  };

  return {
    init: init
  };
})();

exports.default = Edge;
