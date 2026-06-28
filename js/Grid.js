class Grid {
  constructor(rows, columns, cellSize) {
    this.pixels = [];
    this.rows = rows;
    this.columns = columns;
    this.cellSize = cellSize;
  }

  generateRaster() {
    for (let y = 0; y < this.rows; y++) {
      const row = [];
      for (let x = 0; x < this.columns; x++) {
        const pixel = new Pixel(x, y, "black", this.cellSize);
        row.push(pixel);
      }
      this.pixels.push(row);
    }
    console.log(this.pixels);
  }

  render(context) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        const pixel = this.pixels[y][x];
        context.fillStyle = pixel.color;
        context.fillRect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        );
      }
    }
  }
}

