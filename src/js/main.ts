
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

function drawHome() {

    let home: HTMLCanvasElement = document.getElementById('home');
    let ctx = home.getContext('2d');

    // Toit
    ctx.moveTo(40, 80);
    ctx.lineTo(80, 40);
    ctx.lineTo(120, 80);
    // Murs
    ctx.moveTo(60, 80);
    ctx.lineTo(60, 120);
    ctx.lineTo(100, 120);
    ctx.lineTo(100, 80);
    ctx.stroke();

    //soleil
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc(150,40,30,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();

    // Palmier
    ctx.beginPath();
    ctx.strokeStyle = "LimeGreen";
    ctx.moveTo(20,120);
    ctx.arcTo(20,30,160,120,20);
    ctx.stroke();
    ctx.rect(75,100,10,20);
    ctx.stroke();

    // Vaguelettes
    ctx.strokeStyle = "turquoise";
    ctx.beginPath();
    ctx.moveTo(20, 150);
    ctx.bezierCurveTo(80,130,80,180,140,150);
    ctx.moveTo(20, 170);
    ctx.bezierCurveTo(80,150,80,200,140,170);
    ctx.stroke();

    // Sourire
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.moveTo(130, 40);
    ctx.quadraticCurveTo(150,70,170,40);
    ctx.stroke();
}
drawHome();

function drawMastercard(){
    type rectangleType = {
        width: number,
        height: number,
    }
    type cercleType = {
        x1: number,
        x2: number,
        y1: number;
        y2: number,
        radius: number,
        fill: string
    }
    const rectangle: rectangleType = {
        width: 600,
        height: 360,
    }
    const cercle: cercleType = {
        //ctx.arc(150,40,30,0,Math.PI*2,true);
        x1: 200,
        x2: 40,
        y1: 35,
        y2: 0,
        radius: Math.PI*2,
    }

    let mastercard: HTMLCanvasElement = document.getElementById('master-card');
    let ctx = mastercard.getContext('2d');

    //fond noir
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, rectangle.width, rectangle.height);

    //cercles
    ctx.fillStyle = "red";
    ctx.arc(cercle.x1, cercle.x2*3, cercle.y1*3, cercle.y2, cercle.radius);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(cercle.x1*2, cercle.x2*3, cercle.y1*3, cercle.y2, cercle.radius);
    ctx.fill();

    ctx.font = '30pt Helvetica';
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle ="white";
    ctx.fillText("Mastercard",rectangle.width/2,rectangle.height-30);
}

drawMastercard();


function drawTriangle() {
    let triangle: HTMLCanvasElement = document.getElementById('triangle');
    let ctx = triangle.getContext('2d');


    //triangle
    ctx.beginPath()
    ctx.fillStyle = "black";
    ctx.moveTo(150,300);
    ctx.lineTo(300,100);
    ctx.lineTo(450,300);
    ctx.fill();

    //cercles
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(300,230,80,0,Math.PI*2,true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(310,230,65,0,Math.PI*2,true);
    ctx.fill();

}
drawTriangle();


function drawSymbols() {
    type rectangleType = {
        width: number,
        height: number,
    }

    const rectangle: rectangleType = {
        width: 600,
        height: 360,
    }

    let shapes: HTMLCanvasElement = document.getElementById('shapes');
    let ctx = shapes.getContext('2d');

//fond noir
    ctx.fillStyle = "darkblue";
    ctx.fillRect(0, 0, rectangle.width, rectangle.height);

    //triangle 1
    ctx.beginPath()
    ctx.fillStyle = "orange";
    ctx.moveTo(50,300);
    ctx.lineTo(70,250);
    ctx.lineTo(90,300);
    ctx.fill();

    //cercle
    ctx.beginPath();
    ctx.fillStyle = "turquoise";
    ctx.arc(150,280,20,0,Math.PI*2,true);
    ctx.fill();

    //carré
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.strokeRect(200, 250, 50, 50);
    //ctx.transform();

}

drawSymbols();