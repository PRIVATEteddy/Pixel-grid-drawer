const canvas = document.getElementById("canvas");

// Canvas grootte instellen
canvas.width = 800;
canvas.height = 600;

// App initialiseren met 20x15 grid en cellSize van 40px
const app = new App(15, 20, 40);
app.init();