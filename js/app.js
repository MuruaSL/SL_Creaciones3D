// -------------------------definicion de la bd de productos [string de objetos]-------------------------------
let productos =[
    {id:1 , img:"../img/tienda/bigben.png",
            titulo: "Big Ben" , 
            descripcion:"Agrega un toque de la arquitectura icónica de Londres a tu hogar con nuestra detallada pieza" , 
            precio:1000 },

    {id:2 , img:"../img/tienda/eifelcomplex.png",
            titulo: "Torre Eifel Detallada", 
            descripcion:"Celebra la belleza y el encanto de París con nuestra Torre Eiffel de detalles precisos y elegantes" , 
            precio:1000 },

    {id:3 , img:"../img/tienda/cristoredentor.png",
            titulo: "Cristo Redentor", 
            descripcion:"Añade un toque de la cultura brasileña a tu hogar con nuestra estatua del Cristo Redentor en 3D" , 
            precio:1000 },

    {id:4 , img:"../img/tienda/nefertitisNSFW.png",
            titulo: "Nefertiti (NSFW)", 
            descripcion:"Sumérgete en la belleza de la cultura egipcia con nuestra estatuilla de la reina Nefertiti ¡Perfecta como pieza de colección!" , 
            precio:1000 },

    {id:5 , img:"../img/tienda/camellovonoroid.png",
            titulo: "Camello (Voronoi)", 
            descripcion:"Añade una dimensión moderna y vanguardista a tu decoración con nuestra estatuilla de camello con diseño vonoroi." , 
            precio:1000 },

    {id:6 , img:"../img/tienda/esfigie.png",
            titulo: "Esfinge de Guiza", 
            descripcion:"Déjate seducir por la enigmática presencia de la Gran Esfinge de Guiza con nuestra estatuilla 3D" , 
            precio:1000 },

    {id:7 , img:"../img/tienda/mandalorian.png",
            titulo: "Mandalorian", 
            descripcion:"Añade un toque de la galaxia muy, muy lejana a tu hogar con nuestra estatua del Mandaloriano" , 
            precio:1000 },

    {id:8 , img:"../img/tienda/halconmile.png",
            titulo: "Halcon milenario", 
            descripcion:"Trae un poco de la emoción y la aventura de Star Wars a tu hogar con nuestra réplica del Halcón Milenario " , 
            precio:1000 },

    {id:9 , img:"../img/tienda/yodaBbPintado.png",
            titulo: "Baby Yoda", 
            descripcion:"Trae la ternura del personaje más querido de Star Wars a tu hogar con nuestra réplica de Baby Yoda" , 
            precio:1000 },
    {id:10 , img:"../img/tienda/calaberaLapicero.png",
            titulo: "Craneo lapicero" , 
            descripcion:"Lapicero calavera detallado. Úsalo en la oficina, la escuela o en casa." , 
            precio:1540}
]




// --------------  LLENADO DE SECTION CON TARJETAS DE PRODUCTOS EN PAGINA TIENDA  -------------------//

const seccion_productos = document.querySelector("#section_shop")

for(let producto of productos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=
    `
    <article class="container card   separador-tarjeta">
        <div class="card-border-top">
        </div>
        <img src="${producto.img}" class="card-img-top " alt="${producto.titulo}">
        <span> ${producto.titulo} </span>
        <p class="job"> ${producto.descripcion}</p>
        <button> Agregar al carrito $${producto.precio}</button>
    </article>
    `
    seccion_productos.appendChild(contenedor)
}


// ---------------------------------------------MENU DE OPCIONES ----------------------------------------------//
//--------------------------- FUNCIONES PARA EL CARRITO --------------------------------//

//definicion del carrito
let carrito = []

//agregar un producto al carrito
function agregar_producto_carrito(nombre_art) {
    let nuevoprod = {titulo:""}
    nuevoprod.titulo = nombre_art
    carrito.push(nuevoprod)
}
//mostrar productos
function mostrar_carrito(carrito) {
    let lista = []
    for (prod of carrito){
        lista.push(prod.titulo)
    }
    alert(lista)
}
//quitar el ultimo producto
function quitar_ultimo_producto_carrito() {
    carrito.pop()
}
//vaciar carrito
function vaciar_carrito() {
    carrito = [];
    alert("Se vacio tu carrito :c")
}


//eliminar x producto del carrito // sigue sin funcionar
// function elim_x_prod_del_carrito(nombre_art) {
//     let index = []
//     index = carrito.indexOf(nombre_art)
//     for (item_carro of carrito){
//         if (item_carro.titulo == nombre_art) {
//             index.push(item_carro.indexOf)
//         }
//     carrito.splice(index,1)
//     }
// }


//---------------------------------Menu ----------------------------------------//
var menu = "BIENVENIDO AL MENU 2.0\n";
    menu+= "------------*****------------ \n"
    menu+= "Ingrese la opcion que desee usar:\n"
    menu+= "1: Agregar item al carrito\n"
    menu+= "2: Mostrar carrito\n"
    menu+= "3: Quitar el ultimo elemento agregado\n"
    menu+= "4: Vaciar carrito\n"
    menu+= "5: \n"
    menu+= "9: Ir a la tienda\n";

var opcion = 0;
do {
    opcion = parseInt(prompt(menu))
        switch (opcion) {
            case 1:
                let item = prompt("Ingrese el nombre del articulo a agregar")
                agregar_producto_carrito(item)
                console.log("Se agrego correctamente el item: "+ item);
                break
            case 2:
                mostrar_carrito(carrito)
                break
            case 3:
                quitar_ultimo_producto_carrito()
                alert("Se elimino el ultimo producto correctamente")
                break
                
            case 4:
                vaciar_carrito()
                console.log("Se reestablecio el carrito ");
                break
            case 5:
                
                break
            case 9:
                alert("(｡◕‿◕｡) Gracias por usar el sistema (｡◕‿◕｡)")
                console.log(" (｡◕‿◕｡) Gracias por usar el sistema (｡◕‿◕｡)")
                corte = false
                break;
            default: break;
        }
    } while (opcion!=9);


