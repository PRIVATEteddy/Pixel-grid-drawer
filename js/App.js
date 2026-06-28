class App {
  constructor(rows, columns, cellSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.grid = new Grid(rows, columns, cellSize);
  }

  init() {
    this.grid.generateRaster();
    this.grid.render(this.context);
  }
}

const context = canvas.getContext("2d");







