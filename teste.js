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
function circulo(x, y, z) {
    pincel.strokeStyle = 'white';
    pincel.beginPath();
    pincel.arc(x , y, z * 0.5, 0, 2*3.14);
    pincel.stroke();

}

function draw(){

    drawcircle(300, 200, 300);


}
function drawcircle(x , y, z){

    circulo(x, y, z);

    // if(z >2){
    //     drawcircle(x + z * 0.5, y ,z * 0.5);
    //     drawcircle(x - z * 0.5, y ,z * 0.5);
    //     drawcircle(x , y + z * 0.5 ,z * 0.5);
    // }

    for(i= 1; i < z; i = i + 1){
        z = z * 0.5;
        drawcircle(x + z , y ,z );
        drawcircle(x - z , y ,z);
        drawcircle(x , y + z  ,z );
    }
}
