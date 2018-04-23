var Graph = require("./Graph").default;
var Vertex = require("./Vertex").default;

// Create vertices
var sanJose = Object.create(Vertex);
var barcelona = Object.create(Vertex);
var paris = Object.create(Vertex);
var madrid = Object.create(Vertex);
var miami = Object.create(Vertex);

// Init vertices
sanJose.init("San Jose");
barcelona.init("Barcelona");
paris.init("Paris");
madrid.init("Madrid");
miami.init("Miami");

// Set up relationships
sanJose.pointToVertex(barcelona, 4);
barcelona.pointToVertex(madrid, 2);
paris.pointToVertex(miami, 9);
miami.pointToVertex(madrid, 20);
paris.pointToVertex(sanJose, 8);
madrid.pointToVertex(paris, 4);

// Create graph
var graph = Object.create(Graph);

// Init graph
graph.init([sanJose, barcelona, paris, miami, madrid]);

const verticesHash = {
  sanJose,
  barcelona,
  paris,
  miami,
  madrid
};

exports.hash = verticesHash;
exports.default = graph;
