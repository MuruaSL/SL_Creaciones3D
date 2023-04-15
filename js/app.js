// --------------------------------Constructores--------------------------------//

function Figura(nombre,tamano,categoria,precio){
    this.nomFig = nombre;
    this.tamFig = tamano;
    this.categoFig = categoria;
    this.precioFig = precio;
}

// ------------------------------ Funciones ------------------------------------//
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// ---------------------------------Menu ----------------------------------------//
let opcion = Number(prompt("ingrese la opcion que desee: 1:agregar figura, 2:juego de adivinanza, 9:salir"))
    switch (opcion) {
        case 1:
            let continuar = "si"
            while (continuar == "si"){
                let nombre = prompt("ingrese el nombre de la figura");
                let tamano = prompt("ingrese el tamaño de la figura (numeros en [Cm])");
                let categoria = prompt("ingrese la categoria de la figura");
                let precio = prompt("ingrese el precio de la figura [numeros]");
                const nuevafig = new Figura(nombre,tamano,categoria,precio)
                console.log(nuevafig);
                continuar = prompt("¿Desea seguir agregando figuras? (si o no)");
            }
            opcion = Number(prompt("ingrese la opcion que desee: 1:agregar figura, 2:juego de adivinanza, 9:salir"))
            
        case 2:
            let condicion = "si"
            while (condicion == "si") {
                let num = Number(prompt("Elige un numero del 1 al 5 - intenta adivinar el numero de la maquina {•̃_•̃} "))
                alea = getRandomInt(6)
                    if (num == alea) {
                        condicion = prompt("Ganaste!! ಥ_ಥ " + "¿Quieres seguir jugando? (si o no)");
                    }
                    else{
                        condicion = prompt("FUfufuuu!! te gano la maquina ( ͡° ͜ʖ ͡°) " + `el numero era: ${alea}`+" ¿Quieres seguir jugando? (si o no)");
                    }
            }
            opcion = Number(prompt("ingrese la opcion que desee: 1:agregar figura, 2:juego de adivinanza, 9:salir"))

        case 9:
            console.log(" (｡◕‿◕｡) Gracias por usar el sistema (｡◕‿◕｡)")
            corte = false
            break;
    
        default:
            break;
    }
















