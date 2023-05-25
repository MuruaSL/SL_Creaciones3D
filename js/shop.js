///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////  DEFINICIONES  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const contenedorProductos = document.querySelector("#section_shop");
const botonesFiltro = document.querySelectorAll(".boton-filtro");
const titulo_shop = document.querySelector("#titulo_nuestrosprod");
let botonesAgregarAlCarro = document.querySelectorAll(".agregar-prod-carrito");
let productos =[];

////////////////////////////////////////
/////// Traer productos del json////////
////////////////////////////////////////

const traerProductos = async () =>{
    const jsonprod = await fetch ("../json/productos.json");
    const data = await jsonprod.json();
    productos = data
    cargarProductos(productos)
}
traerProductos()

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
    ////////////////////////////////////
    /// AGREGO EL MENSAJE TIPO ALERT ///
    ////////////////////////////////////
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado correctamente al carrito",
        showConfirmButton: false,
        timer: 2200
    });

    //recupero y luego agrego el producto al localstorage
    let carritoaJSON = JSON.stringify(carrito,"carrito");
    localStorage.setItem("carrito",carritoaJSON)
}






//////////////////////////////////////////////////////////////////////////
////////////////////////////PRIMERA EJECUCION/////////////////////////////
//////////////////////////////////////////////////////////////////////////

//mas arriba se define el carrito vacio, ahora lo que hago es cargarlo si es que hay uno en localstorage
carrito = JSON.parse(localStorage.getItem("carrito")) || [];









