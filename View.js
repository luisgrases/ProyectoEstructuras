const readline = require("readline");
const verticesHash = require("./Instance").hash;
const graph = require("./Instance").default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask() {
  rl.question(
    `
    Selecciona una opción:
    1: Buscar ubicación
    2: Encontrar camino mas corto
    `,
    answer => {
      switch (answer) {
        case "1":
          askLocation();
          break;
        case "2":
          console.log(askOrigin());
          break;
        default:
      }
      answer === "done" ? rl.close() : ask();
    }
  );
}

const mapNumberToKey = {
  "1": "barcelona",
  "2": "madrid",
  "3": "sanJose",
  "4": "paris",
  "5": "miami"
};

function askOrigin() {
  rl.question(
    `
    Selecciona un origen:
    1: Barcelona
    2: Madrid
    3: San José
    4: Paris
    5: Miami

    `,
    answer => {
      const origin = verticesHash[mapNumberToKey[answer]];
      askDestination(origin);
    }
  );
}

function askDestination(origin) {
  rl.question(
    `
    Selecciona un destino:
    1: Barcelona
    2: Madrid
    3: San José
    4: Paris
    5: Miami

    `,
    answer => {
      const destination = verticesHash[mapNumberToKey[answer]];
      graph.dijsktra(origin);
      console.log(graph.showPath(origin, destination));
      console.log(graph.showTotalWeightFromOrigin(destination));
    }
  );
  return origin;
}

function askLocation() {
  rl.question(
    `
    Selecciona una ubicación:
    1: Barcelona
    2: Madrid
    3: San José
    4: Paris
    5: Miami

    `,
    answer => {
      switch (answer) {
        case "1":
          console.log(`
            Barcelona:
            Ubicaciones Destino:
              ${verticesHash.barcelona.outgoingEdges.map(
                outgoingEdge => outgoingEdge.pointingVertex.value + " " + outgoingEdge.weight
              )}
            `);
          ask();
          break;
        case "2":
          console.log(`
              Madrid:
              Ubicaciones Adyacentes:
                ${verticesHash.madrid.outgoingEdges.map(
                  outgoingEdge => outgoingEdge.pointingVertex.value + " " + outgoingEdge.weight
                )}
              `);
          ask();
          break;
        case "3":
          console.log(`
                San José:
                Ubicaciones Adyacentes:
                  ${verticesHash.sanJose.outgoingEdges.map(
                    outgoingEdge => outgoingEdge.pointingVertex.value + " " + outgoingEdge.weight
                  )}
                `);
          ask();
          break;
        case "4":
          console.log(`
                  Paris:
                  Ubicaciones Adyacentes:
                    ${verticesHash.paris.outgoingEdges.map(
                      outgoingEdge => outgoingEdge.pointingVertex.value + " " + outgoingEdge.weight
                    )}
                  `);
          ask();
          break;
        case "5":
          console.log(`
                    Miami:
                    Ubicaciones Adyacentes:
                      ${verticesHash.miami.outgoingEdges.map(
                        outgoingEdge => outgoingEdge.pointingVertex.value + " " + outgoingEdge.weight
                      )}
                    `);
          ask();
          break;
        default:
      }
    }
  );
}

ask();
