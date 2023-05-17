// Función para cargar el carrito
function cargarCarrito() {
  // Recuperar el carrito del almacenamiento local
    var productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Obtener el contenedor del carrito
    var contenedorCarrito = document.querySelector("#section-carrito");

  // Limpiar el contenido anterior del carrito
    contenedorCarrito.innerHTML = "";

    if (productosEnCarrito.length === 0) {
        // Mostrar mensaje de carrito vacío
        var mensajeCarritoVacio = document.createElement("div");
        mensajeCarritoVacio.classList.add("sin-art-en-carrito");
        mensajeCarritoVacio.classList.add("container-fluid");
        mensajeCarritoVacio.textContent =
          "VE A DAR UNA VUELTA POR LA TIENDA, AÚN NO TIENES NADA EN EL CARRITO :C ";
        contenedorCarrito.appendChild(mensajeCarritoVacio);
    } 
    else {
    // Mostrar los productos en el carrito
    productosEnCarrito.forEach(function (producto) {
        var divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `
            <article class="articulo-en-carrito">
                <img class="img-art-en-carrito" src="${producto.img}" alt="">
                <p>${producto.titulo}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio * producto.cantidad}</p>
                <button class="boton-elim-art-carrito" data-producto-id="${
                producto.id
                }">
                <i class="bi bi-trash"></i>
                </button>
            </article>
            `;
        contenedorCarrito.appendChild(divProducto);
        //recalcular el total del carrito
        actualizar_total_carrito;
    });

    // Actualizar los botones de eliminar producto del carrito
    actualizarBotonesEliminarProducto();
    }
}

// Función para actualizar los botones de eliminar producto del carrito
function actualizarBotonesEliminarProducto() {
    var botonesElimArtCarrito = document.querySelectorAll(
    ".boton-elim-art-carrito"
    );
    botonesElimArtCarrito.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var productoId = boton.dataset.productoId;
        eliminarProducto(productoId);
    });
    });
}

// Función para eliminar un producto del carrito
function eliminarProducto(productId) {
  // Obtener el carrito del almacenamiento local
    var productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Encontrar el índice del producto a eliminar
    var indiceProducto = productosEnCarrito.findIndex(function (producto) {
    return producto.id === productId;
    });

    if (indiceProducto !== -1) {
    // Reducir la cantidad del producto en 1
    productosEnCarrito[indiceProducto].cantidad--;
    

    // Eliminar el producto si la cantidad llega a 0
    if (productosEnCarrito[indiceProducto].cantidad === 0) {
        productosEnCarrito.splice(indiceProducto, 1);
    }

    // Guardar los productos actualizados en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    //recalcular el total del carrito
        actualizar_total_carrito();
    // Volver a cargar el carrito
    cargarCarrito();
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
    // Agrego ANIMACIONES DE SWEETALERT CON CONDICIONALES PARA HACER O NO LA ELIMINACION
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto luego!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, Vacíalo"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Carrito vaciado",
          "¡Esperamos que lo vuelvas a llenar pronto!",
          "success"
        );
        let carritovacio = [];
        let carritovacioAJSON = JSON.stringify(carritovacio, "carrito");
        localStorage.setItem("carrito", carritovacioAJSON);
        // RecargarCarrito
        cargarCarrito();
        actualizar_total_carrito();
      }
    });
    
}

// Función principal que se ejecuta al cargar la página
    cargarCarrito();
//recalcular el total del carrito
    actualizar_total_carrito();

