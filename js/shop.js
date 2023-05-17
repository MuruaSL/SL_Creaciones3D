// productos

const productos = [
    {
        id:"BigBen",
        img: "../img/tienda/bigben.png",
        titulo: "Big Ben",
        descripcion:"Agrega un toque de la arquitectura icónica de Londres a tu hogar con nuestra detallada pieza",
        categoria: {
            nombre:"Decoracion",
            id:"Decoracion",
        },
        precio: 1000,
        cantidad:0,
    },

    {
        id:"TorreEifelDetallada",
        img: "../img/tienda/eifelcomplex.png",
        titulo: "Torre Eifel Detallada",
        descripcion:"Celebra la belleza y el encanto de París con nuestra Torre Eiffel de detalles precisos y elegantes",
        categoria: {
            nombre:"Decoracion",
            id:"Decoracion",
        },
        precio: 1800,
        cantidad:0,
    },

    {
        id:"CristoRedentor",
        img: "../img/tienda/cristoredentor.png",
        titulo: "Cristo Redentor",
        descripcion:"Añade un toque de la cultura brasileña a tu hogar con nuestra estatua del Cristo Redentor en 3D",
        categoria: {
            nombre:"Decoracion",
            id:"Decoracion",
        },
        precio: 1200,
        cantidad:0,
    },

    {
        id:"Nefertiti",
        img: "../img/tienda/nefertitisNSFW.png",
        titulo: "Nefertiti (NSFW)",
        descripcion:"Sumérgete en la belleza de la cultura egipcia con nuestra estatuilla de la reina Nefertiti ¡Perfecta como pieza de colección!",
        categoria: {
            nombre:"Figuras",
            id:"Figuras",
        },
        precio: 1900,
        cantidad:0,
    },

    {
        id:"CamelloVoronoi",
        img: "../img/tienda/camellovonoroid.png",
        titulo: "Camello (Voronoi)",
        descripcion:"Añade una dimensión moderna y vanguardista a tu decoración con nuestra estatuilla de camello con diseño vonoroi.",
        categoria: {
            nombre:"Decoracion",
            id:"Decoracion",
        },
        precio: 1150,
        cantidad:0,
    },

    {
        id:"EsfingeGuiza",
        img: "../img/tienda/esfigie.png",
        titulo: "Esfinge de Guiza",
        descripcion:"Déjate seducir por la enigmática presencia de la Gran Esfinge de Guiza con nuestra estatuilla 3D",
        categoria: {
            nombre:"Decoracion",
            id:"Decoracion",
        },
        precio: 1300,
        cantidad:0,
    },

    {
        id:"Mandalorian",
        img: "../img/tienda/mandalorian.png",
        titulo: "Mandalorian",
        descripcion:"Añade un toque de la galaxia muy, muy lejana a tu hogar con nuestra estatua del Mandaloriano",
        categoria: {
            nombre:"Figuras",
            id:"Figuras",
        },
        precio: 1200,
        cantidad:0,
    },

    {
        id:"HalconMilenario",
        img: "../img/tienda/halconmile.png",
        titulo: "Halcon Milenario",
        descripcion:"Trae un poco de la emoción y la aventura de Star Wars a tu hogar con nuestra réplica del Halcón Milenario ",
        categoria: {
            nombre:"Coleccion",
            id:"Coleccion",
        },
        precio: 2000,
        cantidad:0,
    },

    {
        id:"BabyYoda",
        img: "../img/tienda/yodaBbPintado.png",
        titulo: "Baby Yoda",
        descripcion:"Trae la ternura del personaje más querido de Star Wars a tu hogar con nuestra réplica de Baby Yoda",
        categoria: {
            nombre:"Figuras",
            id:"Figuras",
        },
        precio: 1500,
        cantidad:0,
    },
    {
        id: "CraneoLapicero",
        img: "../img/tienda/calaberaLapicero.png",
        titulo: "Craneo Lapicero",
        descripcion:"Lapicero calavera detallado. Úsalo en la oficina, la escuela o en casa.",
        categoria: {
            nombre:"Funcionales",
            id:"Funcionales",
        },
        precio: 2000,
        cantidad:0,
    }
];

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////  DEFINICIONES  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const contenedorProductos = document.querySelector("#section_shop");
const botonesFiltro = document.querySelectorAll(".boton-filtro");
const titulo_shop = document.querySelector("#titulo_nuestrosprod");
let botonesAgregarAlCarro = document.querySelectorAll(".agregar-prod-carrito");

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  FUNCIONES  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////
/////// CARGAR PRODUCTOS A LA TIENDA - TODOS EN PRIMERA EJECUCION ////////
//////////////////////////////////////////////////////////////////////////
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML= ""
    productosElegidos.forEach(producto =>{

        const div = document.createElement("article")
        div.classList.add("producto");
        div.innerHTML =`
        <article class="container card   separador-tarjeta">
            <div class="card-border-top">
            </div>
            <img src="${producto.img}" class="card-img-top " alt="${producto.titulo}">
            <span> ${producto.titulo} </span>
            <p class="job"> ${producto.descripcion}</p>
            <button id="${producto.id}" class="agregar-prod-carrito"> Agregar al carrito $${producto.precio}</button>
            
        </article>`;
        contenedorProductos.append(div);
    })
    actualizarListadoBotonesAgregarCarrito();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FILTRAR PRODUCTOS//////////////////////////////////////////////////
////// SI SE TOCA UN BOTON FILTRO SE RECARGAN LOS PRODUCTOS DE LA TIENDA CON LOS QUE TIENEN ID = BOTON/////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
botonesFiltro.forEach(boton=>{
    //cuando se le da click al boton se "activa"
    boton.addEventListener("click",(evento)=>{
        //primero elimina el active de todos los votones y luego activa al que se dio click(le agrega clase active)
        botonesFiltro.forEach(boton => boton.classList.remove("active"))
        evento.currentTarget.classList.add("active")
        if(evento.currentTarget.id != "Todos"){
            // se filtran los productos cuando se usan los botones filtros- con el id de la categoria si la misma no es todos
            const productosBoton = productos.filter(producto => producto.categoria.id === evento.currentTarget.id)
            cargarProductos(productosBoton)
        }
        // si se activa el filtro todos activa la carga de todos los productos
        else{
            cargarProductos(productos)
        }
    })
})

//////////////////////////////////////////////////////////////////////////////////////
/// CADA VEZ QUE SE EJECUTA LE DA A LOS BOTONES AGREGAR AL CARRITO EL EVENTO CLICK ///
//////////////////////////////////////////////////////////////////////////////////////
function actualizarListadoBotonesAgregarCarrito(){
    botonesAgregarAlCarro = document.querySelectorAll(".agregar-prod-carrito");
    botonesAgregarAlCarro.forEach(boton =>{
        boton.addEventListener("click", agregar_producto_al_carrito)
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/// DEFINICION DEL CARRITO DE COMPRAS VACIO y CAPTURA DEL CONTENEDOR DEL MENSAJE DE CARRITO VACIO///
////////////////////////////////////////////////////////////////////////////////////////////////////

let carrito = []

///////////////////////
///AGREGAR PRODUCTO ///
///////////////////////
function agregar_producto_al_carrito(evento){
    if ((carrito = JSON.parse(localStorage.getItem("carrito"))) == null) {
        carrito = [];
    }

    const idBoton = evento.currentTarget.id
    const prodAAgregar = productos.find(producto =>producto.id === idBoton)
// verificar si existe el producto agregado en el array para saber si agregarlo o aumentar cantidad

    if(carrito.some(producto => producto.id === idBoton))  {
        // SI EL PRODUCTO A PUSHEAR EXISTE YA EN EL CARRITO AGREGO +1 AL ATRIBUTO CANTIDAD
        let indiceProducto = carrito.findIndex(producto => producto.id === idBoton)
        // PARA AGREGARLE EL +1 BUSCO ANTES EL PRODUCTO EN EL CARRITO Y OBTENGO SU INDICE, Y LUEGO LE HAGO EN ESE PRODUCTO INDICE EL CANTIDAD +1
        carrito[indiceProducto].cantidad +=1
        console.log(carrito)
    }   
    else{
        //SI EL PRODUCTO QUE SE AGREGA AHORA NO ESTÁ AUN, HAGO DIRECTAMENTE UN PUSH - PERO LE DOY UNA CANTIDAD 1
        prodAAgregar.cantidad = 1;
        carrito.push(prodAAgregar)
        console.log(carrito);
    }

    //recupero y luego agrego el producto al localstorage
    let carritoaJSON = JSON.stringify(carrito,"carrito");
    localStorage.setItem("carrito",carritoaJSON)
}






//////////////////////////////////////////////////////////////////////////
////////////////////////////PRIMERA EJECUCION/////////////////////////////
//////////////////////////////////////////////////////////////////////////

//mas arriba se define el carrito vacio, ahora lo que hago es cargarlo si es que hay uno en localstorage
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

cargarProductos(productos);








