let area = document.querySelector('.area_juego');
let punto = area.getContext('2d');

let teclas = {
    UP: 38,
    DOWN:40,
    LEFT: 37,
    RIGHT:39
};

function aleatorio(min,max){
    let result;
    result = Math.floor(Math.random()*(max-min+1)) + min;
    return result;
}

function mover(color,x,y){

    punto.fillStyle = color;
    punto.fillRect(x,y,3,3);
}

let xi = aleatorio(0,area.width);
let yi = aleatorio(0,area.height);
let color = 'green';

document.addEventListener('keydown',mover_culebra);
window.addEventListener('load',poner_incio);

function poner_incio(){
    punto.fillStyle = color;
    punto.fillRect(xi,yi,3,3);

}


function mover_culebra(evento){

    let paso = 3;

    switch(evento.keyCode){

        case teclas.UP:

            punto.clearRect(xi-0.1,yi-0.1,3.2,3.2); 
            yi = yi - paso;
            mover(color,xi,yi);   
            break;
        
        case teclas.DOWN:
            punto.clearRect(xi-0.1,yi-0.1,3.2,3.2);  
            yi = yi + paso;
            mover(color,xi,yi);
            break;

        case teclas.LEFT:
            punto.clearRect(xi-0.1,yi-0.1,3.2,3.2); 
            xi = xi - paso;
            mover(color,xi,yi);
            break;
        
        case teclas.RIGHT:
            punto.clearRect(xi-0.1,yi-0.1,3.2,3.2);  
            xi = xi + paso;
            mover(color,xi,yi);
            break;
    }
}