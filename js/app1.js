// -------------------------definicion de la bd de productos [string de objetos]-------------------------------
let productos =[
    {id:1 , img:"../img/tienda/bigben.png",
            titulo: "Big Ben" , 
            descripcion:"Agrega un toque de la arquitectura icónica de Londres a tu hogar con nuestra detallada pieza" , 
            precio:1000 },

    {id:2 , img:"../img/tienda/eifelcomplex.png",
            titulo: "Torre Eifel Detallada", 
            descripcion:"Celebra la belleza y el encanto de París con nuestra Torre Eiffel de detalles precisos y elegantes" , 
            precio:1800 },

    {id:3 , img:"../img/tienda/cristoredentor.png",
            titulo: "Cristo Redentor", 
            descripcion:"Añade un toque de la cultura brasileña a tu hogar con nuestra estatua del Cristo Redentor en 3D" , 
            precio:1200 },

    {id:4 , img:"../img/tienda/nefertitisNSFW.png",
            titulo: "Nefertiti (NSFW)", 
            descripcion:"Sumérgete en la belleza de la cultura egipcia con nuestra estatuilla de la reina Nefertiti ¡Perfecta como pieza de colección!" , 
            precio:1900 },

    {id:5 , img:"../img/tienda/camellovonoroid.png",
            titulo: "Camello (Voronoi)", 
            descripcion:"Añade una dimensión moderna y vanguardista a tu decoración con nuestra estatuilla de camello con diseño vonoroi." , 
            precio:1150 },

    {id:6 , img:"../img/tienda/esfigie.png",
            titulo: "Esfinge de Guiza", 
            descripcion:"Déjate seducir por la enigmática presencia de la Gran Esfinge de Guiza con nuestra estatuilla 3D" , 
            precio:1300 },

    {id:7 , img:"../img/tienda/mandalorian.png",
            titulo: "Mandalorian", 
            descripcion:"Añade un toque de la galaxia muy, muy lejana a tu hogar con nuestra estatua del Mandaloriano" , 
            precio:1200 },

    {id:8 , img:"../img/tienda/halconmile.png",
            titulo: "Halcon Milenario", 
            descripcion:"Trae un poco de la emoción y la aventura de Star Wars a tu hogar con nuestra réplica del Halcón Milenario " , 
            precio:2000 },

    {id:9 , img:"../img/tienda/yodaBbPintado.png",
            titulo: "Baby Yoda", 
            descripcion:"Trae la ternura del personaje más querido de Star Wars a tu hogar con nuestra réplica de Baby Yoda" , 
            precio:1500 },
    {id:10 , img:"../img/tienda/calaberaLapicero.png",
            titulo: "Craneo Lapicero" , 
            descripcion:"Lapicero calavera detallado. Úsalo en la oficina, la escuela o en casa." , 
            precio:2000}
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
        <button class="seleccionar-producto${producto.id}"> Agregar al carrito $${producto.precio}</button>
        
    </article>
    `
    seccion_productos.appendChild(contenedor)
}

//--------------------------- FUNCIONES PARA EL CARRITO --------------------------------//

//definicion del carrito
let carrito = []

//agregar un producto al carrito
function agregar_producto_carrito(nombre_art) {
    // Buscar el producto por su título
    let producto_encontrado = productos.find(function(producto) {
        return producto.titulo === nombre_art;
    });
    // Si se encontró el producto, agregarlo al carrito
    if (producto_encontrado) {
        carrito.push(producto_encontrado);
        
    } else {
        
        console.log("No se encontró el producto: " + nombre_art);
    }
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
    if (carrito != []){
        carrito.pop()
        alert("Se elimino el ultimo producto correctamente")
    }
    else{
        alert("Su carrito ya está vacio")
    }
}
//vaciar carrito
function vaciar_carrito() {
    carrito = [];
    alert("Se vacio tu carrito :c")
}
//Mostrar catalogo de articulos 
function mostrar_catalogo2(){
    let catalogo = []
        for (let i = 0; i < productos.length; i++) {
            catalogo += `${productos[i].titulo}`
        }
        return catalogo
}
function mostrar_catalogo(){
    let catalogo = []
    catalogo += "-----------------------------Catalogo------------------------------\n"
        for (let i = 0; i < productos.length; i++) {
            catalogo += `${i}. ${productos[i].titulo} , Precio: $ ${productos[i].precio}\n`

        }
    catalogo += "--------------------------------------------------------------------\n"
    catalogo += "     Copie y pegue los nombres en la opcion 1 para comprar\n"
    catalogo += "--------------------------------------------------------------------\n"
        return catalogo
}
// eliminarElemento_carrito X
function eliminarElemento_carrito(carrito, producto) {
    let buscado = producto.titulo;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].titulo === buscado) {
            carrito.splice(i, 1);
            console.log("Se eliminó el producto");
            alert("Se elimino el articulo")
            break;
        }
    }
    return carrito;
}

function calcular_total_carrito(){
    let total = 0
    for (elem of carrito){
        total += elem.precio
    }
    return total
}







// //---------------------------------Menu ----------------------------------------//
// var menu = "BIENVENIDO AL MENU 2.0\n";
//     menu+= "------------*****------------ \n"
//     menu+= "Ingrese la opcion que desee usar:\n"
//     menu+= "1: Agregar item al carrito\n"
//     menu+= "2: Mostrar carrito\n"
//     menu+= "3: Quitar el ultimo elemento agregado\n"
//     menu+= "4: Vaciar carrito\n"
//     menu+= "5: Quitar un producto (Mediante nombre) \n"
//     menu+= "6: Mostrar catalogo de productos\n"
//     menu+= "7: Mostrar el total del carrito\n"
//     menu+= "8: meter datos al localstore\n"
//     menu+= "10: sacar datos del localstores"
//     menu+= "9: Ir a la tienda\n";

// var opcion = 0;
// do {
//     opcion = parseInt(prompt(menu))
//         switch (opcion) {
//             case 1:
//                 alert(mostrar_catalogo())
//                 let prod = prompt("Ingrese el nombre del articulo a agregar");
//                 let producto_encontrado = null;
//                 for (let i = 0; i < productos.length; i++) {
//                     if (productos[i].titulo === prod) {
//                         producto_encontrado = productos[i];
//                         break;
//                     }
//                 }
//                 if (producto_encontrado) {
//                 agregar_producto_carrito(producto_encontrado.titulo);
//                 alert("Se agregó correctamente el producto: " + producto_encontrado.titulo)
//                 console.log("Se agregó correctamente el producto: " + producto_encontrado.titulo);
                
//                 }else {
//                 alert("No se encontró el producto: " + prod);
//                 console.log("No se encontró el producto: " + prod);
//                 } 
//                 break
//             case 2:
//                 mostrar_carrito(carrito)
//                 break
//             case 3:
//                 quitar_ultimo_producto_carrito()
//                 break
                
//             case 4:
//                 vaciar_carrito()
//                 console.log("Se reestablecio el carrito ");
//                 break
//             case 5:
//                 let producto = { titulo: "" };
//                 let nombre = prompt("Ingrese el nombre del artículo a eliminar");
//                 producto.titulo = nombre;
//                 eliminarElemento_carrito(carrito, producto);
//                 break
//             case 6:
//                 alert( mostrar_catalogo())
//                 break
//             case 7:
//                 alert("El total acumulado de su carrito es de: $"+ calcular_total_carrito())
//                 break
//             case 8:
//                 const dato = prompt("ingrese dato")
//                 const datoString = JSON.stringify(dato)
//                 localStorage.setItem("dato",datoString)
//                 break
//             case 10:
//                 const datoslocal = localStorage.getItem(dato)
//                 const datoRecogido = JSON.parse(datoslocal)
//                 alert(datoRecogido)
//                 break
//             case 9:
//                 alert("(｡◕‿◕｡) Gracias por usar el sistema (｡◕‿◕｡)")
//                 console.log(" (｡◕‿◕｡) Gracias por usar el sistema (｡◕‿◕｡)")
//                 corte = false
//                 break;
//             default: 
//                 break

//         }
//     } while (opcion!=9);


