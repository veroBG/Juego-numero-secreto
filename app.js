let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); //funcion generica 
    elementoHTML.innerHTML = texto;
    return;
}

//función con el boton click
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //eL usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

//función para limpiar campo
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}


//función para números aleatorios
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el número generado esta incluido en la lista generar uno nuevo:
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');

    } else {
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //recursividad para que la funcion se llame a si misma y pueda ir guadando ese numero aleatorio 
            //cada que se genere
            return generarNumeroSecreto();
            //si no agregar ese numero a la litas numeroGenerado
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    //invocamos la función generica asginartextoelemento dos veces, una para h1 y otra para p.
    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

