class Tool {
  constructor(name) {
    this.name = name;
  }
}

class PenTool extends Tool {
  constructor(color) {
    super("pen");
    this.color = color;
  }
}