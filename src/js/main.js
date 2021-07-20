// /** First Slider*/
// $('.slider-one').not(".slick-intialized").slick({
//     autoplay:true,
//     autoplaySpeed:2000,
//     dots:true,
//     prevArrow: ".site-slider .slider-btn .prev",
//     nextArrow: ".site-slider .slider-btn .next",

// });

// /** Second Slider*/
// $('.slider-two').not(".slick-intialized").slick({
//     prevArrow: ".site-slider-two .prev",
//     nextArrow: ".site-slider-two .next",
//     slidesToShow:5,
//     sliderToScroll:1,
//     autoplaySpeed:2000

// });

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

    procesarCompraBtn.addEventListener('click', procesarCompra);
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
            })
        }, 6000);

    }
}

