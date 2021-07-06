const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');

cargarEventos();

function cargarEventos() {
    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', (e) => { carro.comprarProducto(e) });
    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e) => { carro.eliminarProducto(e) });
    //Al vaciar carrito
    vaciarCarrito.addEventListener('click', (e) => { carro.vaciarCarrito(e) });
    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    //Enviar pedido a otra pagina
}