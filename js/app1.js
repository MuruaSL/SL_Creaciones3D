const contenedorCarrito = document.querySelector("#section-carrito");
function cargarcarrito(productosEnCarrito) {
  // Recupero el carrito
  productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  if (productosEnCarrito == null) {
    productosEnCarrito = [];
  }
  contenedorCarrito.innerHTML = "";
  if (productosEnCarrito === []) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
            <div id="mensajeSinArticulosEnCarrito" class="sin-art-en-carrito displaynone">
                AUN NO TIENES NADA EN EL CARRITO :C 
                VEN A DAR UNA VUELTA POR LA TIENDA
                <button><a href="./shop.html">Visitar la tienda</a></button>
            </div>`;
    contenedorCarrito.append(div);
  } else {
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("article");
      div.classList.add("producto");
      div.innerHTML = `
            <article class="articulo-en-carrito">
                <img class="img-art-en-carrito" src="${producto.img}" alt="">
                <p>${producto.titulo}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio:$ ${producto.precio * producto.cantidad}</p>
                <button class="boton-elim-art-carrito"><i class="bi bi-trash "></i></button>
            </article>`;
      contenedorCarrito.append(div);
    });
    // actualizarListadoBotoneseliminarArtDeCarrito();
  }
}

//////////////////////////////////////
//// CALCULAR EL TOTAL DEL CARRITO ///
//////////////////////////////////////
function calcular_total_carrito() {
  //reseteo primero el total y luego lo recalculo
  total = 0;
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  // por cada producto del carrito suma el precio por su cantidad
  productosEnCarrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  return total;
}
//////////////////////////////////////////
/// BTN eliminar 1 producto del carrito///
//////////////////////////////////////////
function boton_basurero(event) {
  // Obtener los productos del carrito del almacenamiento local
  var productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

  // Obtener el botón que se ha clicado
  var botonClicado = event.currentTarget;

  // Obtener el producto correspondiente al botón
  var productoID = botonClicado.dataset.productoId;
  var producto = productosEnCarrito.find(function (item) {
    return item.id === productoID;
  });

  // Verificar si se encontró el producto
  if (producto) {
    // Disminuir el atributo en 1 unidad
    producto.cantidad -= 1;

    // Actualizar el producto en el carrito del almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }
}

// Obtener todos los botones con la clase '.boton-elim-art-carrito'
var botonesElimArtCarrito = document.querySelectorAll(
  ".boton-elim-art-carrito"
);

// Agregar el evento 'click' a cada botón y llamar a la función 'boton_basurero'
botonesElimArtCarrito.forEach(function (boton) {
  boton.addEventListener("click", boton_basurero);
});

////////////////////////////////////////////
//// ACTUALIZAR EL TXT TOTAL DEL CARRITO ///
////////////////////////////////////////////
function actualizar_total_carrito() {
  total = calcular_total_carrito();
  let puntero_texto_total = document.querySelector("#precio-total");
  puntero_texto_total.textContent = "Total: $" + total;
}
///////////////////////
//// VACIAR CARRITO ///
///////////////////////

//Se aplica el evento click al boton de eliminar carrito//
let botonvaciarcarrito = document.querySelectorAll("#boton-vaciar-carrito");
botonvaciarcarrito.forEach((boton) => {
  boton.addEventListener("click", vaciar_carrito);
});

function vaciar_carrito() {
  let carritovacio = [];
  let carritovacioAJSON = JSON.stringify(carritovacio, "carrito");
  localStorage.setItem("carrito", carritovacioAJSON);
  // RecargarCarrito
  cargarcarrito(productosEnCarrito);
  calcular_total_carrito();
}

//////////////////////////////////////////////////////////////////////////
////////////////////////////PRIMERA EJECUCION/////////////////////////////
//////////////////////////////////////////////////////////////////////////

//recuperar el carrito en primera ejecucion para cargar la pagina
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
let total = 0;
// Cargo el carrito
cargarcarrito(productosEnCarrito);
// Calculo el total de los productos en carrito
total = calcular_total_carrito();
actualizar_total_carrito();
