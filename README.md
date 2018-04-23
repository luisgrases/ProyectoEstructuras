# Proyeto Estructuras de Datos

  * [Introducción](#introducción)
  * [Implementación](#implementación)
    + [Clases](#clases)
      - [Vertex](#vertex)
      - [Edge](#edge)
      - [Graph](#graph)
    + [Caso](#caso)
    + [Problemas Encontrados](#problemas-encontrados)
      - [Menú en consola](#men--en-consola)
      - [Clases](#clases-1)
  * [Investigación](#investigación)


## Introducción
La siguiente investigación explora el algoritmo Dijkstra. Dicho algoritmo es utilizado para resolver el camino mas corto entre dos vértices en un grafo ponderado. La investigación consiste en la recreación de un problema real donde se tienen distintas localidades separadas por una distancia especifica. Esta distancia no esta únicamente ligada a unidaded de longitud, si no que también puede representarse como unidad de tiempo u otras medidas. Se requiere conocer el recorrido óptimo entre dos vértices en un tiempo de O(|V|^{2}) . Además se quiere permitir que el usuario busque un vértice en tiempo constante utilizando una tabla hash.

Un grafo ponderado es aquel donde los arcos que unen a los vértices poseen un valor que representan el costo de moverse entre un vértice y otro. Este costo puede ser representado en diferentes unidades, ya sea tiempo, dinero, distancia etc.

Una tabla hash es una tabla que permite almacenar y buscar elementos por medio de una llave en tiempo constante O(1). Para ello mapea cada llave a un entero que sera utilizado como index en un array donde realmente se guardan los elementos. Este mapeo se realiza con un metodo llamado hashing. Esto da mucha comodidad ya que permite asociar una llave que es fácil de recordar a un elemento especifico.


## Implementación

La implementación de la solución se hizo en javascript. Es un lenguaje orientado a objetos dinámicamente tipeado que que no ha implementado clases hasta las úlitmas versiones. A pesar de que no se utilizaron clases en si, se utilizó un concepto muy parecido que va a ser tratado como clases para facilitar la comprensión del documento.
### Clases
![Diagrama de Clase](https://image.ibb.co/cRjx9H/download_1.png "Diagrama de Clase")

#### Vertex
`value`  El valor del vértice.

`outgoingEdges`: Los arcos que salen del vértice.

`parent`: El padre del vértice una vez que se ha realizado Dijkstra.

`distanceFromOrigin` Distancia desde el origen. Utilizado durante la ejecución de Dijkstra.

`pointToVertex(vertex)` Setter para outgoingEdges.

#### Edge
`weight`  El valor ponderado del arco.

`pointingVertex` El vértice al que apunta el arco.

#### Graph
`dijkstra(origin)`  Aplica Djikstra al vertice especificado.

`showPath(vertexFrom, vertexTo)` Muestra el camino entre dos vertices una vez aplicado Djikstra.

`showTotalWeightFromOrigin(vertexTo)` Muestra el ponderado total desde el origen hasta el vértice especificado.

### Caso
Como esta investigación estudia un problema específico, se recreó el siguiente escenario:

Se toman 5 ciudades: `San José`, `Barcelona`, `Madrid`, `Paris`, `Miami`

Se crean las relaciones:
`San José` -(4)-> `Barcelona`
`Barcelona` -(2)-> `Madrid`
`Paris` -(9)-> `Miami`
`Miami` -(20)-> `Madrid`
`Paris` -(8)-> `San José`
`Madrid` -(4)-> `Paris`

Además se creó una tabla hash para buscar las ciudades individualmente:
```
const verticesHash = {
  sanJose,
  barcelona,
  paris,
  miami,
  madrid
};
```
Esto deja el problema preparado para poder aplicar Dijkstra a la hora de ejecutarlo.

### Problemas Encontrados
#### Menú en consola
A la hora de realizar el menú en consola, el proceso es un poco incómodo. En vez de tener un `while(condicion) -> mostrarMenú` se require hacer una función recurrente que al terminar se llame a si misma:
```
function ask() {
	console.log("Selecciona una opción")
	.....
	if(opcion != 0) ask();
}
```
Esto puede crear un stack overflow despues de muchas iteraciones. A pesar de eso se utilizó ya que es muy poco probable que pase en la realidad.

#### Clases
Como Javascript no utilizaba clases hasta hace poco y algunos engines todavia no las soportan, se optó por construir objetos de una forma distinta. Para entenderlo se toma el siguiente ejemplo:
```
var Edge = (function() {
  var init = function(pointingVertex, weight) {
    this.pointingVertex = pointingVertex;
    this.weight = weight;
  };

  return {
    init: init
  };
})();
```
Se crea un objeto Edge con un metodo `init` que representa el constructor. Edge es una funcion que automaticamente se llama despues de ser declarada. Esto ultimo es para poder encapsular los metodos privados y exponer los que se requieran. Luego se pueden hacer copias de Edge utilizando `var copia = Object.create(Edge)` y se inicializan con  `copia.init(argumentos)`.
##Instrucciones de Operación
Para correr la aplicación se ejecuta el archivo View.js utilizando node: `node View.js`. Seguidamente se despliega un menú con las distintas opciones. El menú se explica por si mismo.
##Estado Actual
La aplicación esta operativa. Es posible que hayan casos especificos donde falle como toda aplicación pero hasta ahora no se han encontrado.

## Investigación
Ver Adjunto.


