const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');


cargarEventos();

function cargarEventos() {
    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', (e) => { carro.comprarProducto(e) });
    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e) => { carro.eliminarProducto(e) });
    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e) => { carro.vaciarCarrito(e) });
    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', (e) => { carro.procesarPedido(e) });
}

$(document).ready(function () {
    const APIURL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";


    $.ajax({
        method: "GET",
        url: APIURL,
        dataType: "json",
        success: function (data) {
            // console.log("Data que retorna el dolar :");
            // console.log(data);
            myArray = data[1].casa;
            myArray2 = data[0].casa;
            const row = `
            <tr>
                <td>${myArray.nombre}</td>
                <td>${myArray.compra}</td>
                <td>${myArray.venta}</td>
            </tr>
            `;
            $("#dolar>tbody").append(row);

            const row2 = `
            <tr>
                <td>${myArray2.nombre}</td>
                <td>${myArray2.compra}</td>
                <td>${myArray2.venta}</td>
            </tr>
            `;
            $("#dolar>tbody").append(row2);
        }
    });

});