inicia();
var tela;
var pincel;
function inicia(){
    tela = document.querySelector('canvas');
    pincel = tela.getContext('2d');
    setup()
    draw();
}
function setup(){

    pincel.fillStyle = 'black';
    pincel.fillRect( 0, 0, 600, 600);
}
function circulo(x, y,z , cor) {
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.arc(x , y, z * 0.5, 0, 2*3.14);
    pincel.stroke();

}

function draw(){

    drawcircle(300, 300, 300, 'green');


}
function drawcircle(x , y, z, cor){

    circulo(x, y, z, 'white');

    if(z >2){
        drawcircle(x + z * 0.5, y ,z * 0.5, 'white');
        drawcircle(x - z * 0.5, y ,z * 0.5, 'red');
        //drawcircle(x , y + z * 0.5 ,z * 0.5, 'green');
    }
}
