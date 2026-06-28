class App {
  constructor(rows, columns, cellSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.grid = new Grid(rows, columns, cellSize);
    this.tool = new PenTool("red");
  }

  init() {
    this.grid.generateRaster();
    this.resizeCanvas();
    this.attachEvents();
    this.grid.render(this.context);
  }

  resizeCanvas() {
    this.canvas.width = this.grid.columns * this.grid.cellSize;
    this.canvas.height = this.grid.rows * this.grid.cellSize;
  }

  attachEvents() {
    this.canvas.addEventListener("click", event => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      const column = Math.floor(clickX / this.grid.cellSize);
      const row = Math.floor(clickY / this.grid.cellSize);

      if (row >= 0 && row < this.grid.rows && column >= 0 && column < this.grid.columns) {
        this.grid.setPixelColor(column, row, this.tool.color);
        this.grid.render(this.context);
      }
    });
  }
}

const context = canvas.getContext("2d");







