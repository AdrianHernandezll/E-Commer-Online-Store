const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos() {

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}

function procesarCompra(e) {
    e.preventDefault();

    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            icon: "warning",
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos en el carrito',
            showConfirmButton: false,
            timer: 3000
        }).then(function () {
            window.location = "index.html"
        })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            icon: "warning",
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campor requeridos',
            showConfirmButton: false,
            timer: 3000
        });
    } else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = "block";

        const enviado = document.createElement('IMG');
        enviado.src = "src/img/mail.gif";
        enviado.style.display = "block";
        enviado.style.width = "150px";

        setTimeout(() => {
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = "index.html";
            }, 3000);
        }, 3000);

    }
}

