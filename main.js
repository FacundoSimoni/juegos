var carrito = [];

function seleccionarImagen(imagen) {
  var precio = parseFloat(imagen.getAttribute("data-precio") );
  var nombre = imagen.alt;

  if (carrito.findIndex(item => item.nombre === nombre) === -1) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  var carritoLista = document.getElementById("carrito-lista");
  var total = document.getElementById("total");
  var totalPrecio = 0;

  carritoLista.innerHTML = "";
  carrito.forEach(item => {
    var listItem = document.createElement("li");
    listItem.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    carritoLista.appendChild(listItem);
    totalPrecio += item.precio;
  });

  total.textContent = totalPrecio.toFixed(2);
}



