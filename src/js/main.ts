
function drawSuisse (){
    type rectangleType = {
        width: number,
        height: number,
    }
    let suisse: HTMLCanvasElement = document.getElementById('Swiss-flag');
    let ctx = suisse.getContext('2d');


    const rectangle: rectangleType = {
        width: 100,
        height: 300,
    }

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, suisse.width, suisse.height);

    ctx.fillStyle = "white";
    ctx.fillRect(suisse.width / 2 - rectangle.width / 2, suisse.height / 2 - rectangle.height / 2, rectangle.width, rectangle.height);

    ctx.fillRect(suisse.width / 2 - rectangle.height / 2, suisse.height / 2 - rectangle.width / 2, rectangle.height, rectangle.width);


    /*
    // Une largeur de trait de 2 pixels
    ctx.lineWidth = 2;
    // Un beau rouge pour le remplissage
    ctx.fillStyle = "red";
    // La nuit, tous les traits sont gris
    ctx.strokeStyle = "#ccc";
    // Un rectangle plein (rouge)
    ctx.fillRect(10, 10, 200, 100);
    // Deux rectangles effaçant le dessin (blancs)
    ctx.clearRect(100,20, 20, 80);
    ctx.clearRect(70,50, 80, 20);²
    // Un dernier rectangle (trait gris)*/

}

drawSuisse();
