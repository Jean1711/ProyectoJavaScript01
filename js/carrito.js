// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Ricocan Paté Cordero x 330gr',
        precio: 5.5,
        imagen: '../assets/images/productos_ricocan_pate_cordero.png'
    },
    {
        id: 2,
        nombre: 'Ricocan Trocitos en Salsa de Cordero',
        precio: 2.5,
        imagen: '../assets/images/productos_ricocan_trocitos_cordero.png'
    },
    {
        id: 3,
        nombre: 'Ricocan Paté Pollo x 330gr',
        precio: 5.5,
        imagen: '../assets/images/productos_ricocan_pate_pollo.png'
    },
    {
        id: 4,
        nombre: 'Canbo Adultos de razas medianas y grandes',
        precio: 56,
        imagen: '../assets/images/productos_canbo_medianas_grandes.png'
    },
    {
        id: 5,
        nombre: 'Canbo Cachorros de razas pequeñas',
        precio: 23,
        imagen: '../assets/images/productos_canbo_cachorros_pequenias.png'
    },
    {
        id: 6,
        nombre: 'Canbo Adultos de razas pequeñas',
        precio: 56,
        imagen: '../assets/images/productos_canbo_Adultos_pequenas.png'
    },
    {
        id: 7,
        nombre: 'Zeedog Pelota Súper Orange',
        precio: 39,
        imagen: '../assets/images/productos_zeedog_pelota_orange.png'
    },
    {
        id: 8,
        nombre: 'GIGwi Ball - Pelota para perros',
        precio: 19.9,
        imagen: '../assets/images/productos_gigwi_ball.png'
    },
    {
        id: 9,
        nombre: 'Zeedog Pelota Rob el Microbio',
        precio: 39,
        imagen: '../assets/images/productos_zeedog_pelota_microbio.png'
    },
    {
        id: 10,
        nombre: 'Gentledog - Cuello y corbata para perros',
        precio: 37,
        imagen: '../assets/images/productos_gentledog_cuello_corbata.png'
    },
    {
        id: 11,
        nombre: 'Perruanísima - Bandana para perros',
        precio: 32,
        imagen: '../assets/images/productos_perruanisima_bandana.png'
    },
    {
        id: 12,
        nombre: 'Brandon - Corbata michi para perros',
        precio: 37,
        imagen: '../assets/images/productos_brandon_corbata_michi.png'
    },
    {
        id: 13,
        nombre: 'Hartz Shampoo para cachorros',
        precio: 37,
        imagen: '../assets/images/productos_hartz_para_cachorros.png'
    },
    {
        id: 14,
        nombre: 'Hartz Shampoo 3 en 1 para perros',
        precio: 37,
        imagen: '../assets/images/productos_hartz_shampoo_3en1.png'
    },
    {
        id: 15,
        nombre: 'Hartz Shampoo aclarante para perros',
        precio: 37,
        imagen: '../assets/images/productos_hartz_shampoo_aclarante.png'
    },
    {
        id: 16,
        nombre: 'Bravecto 500mg Antipulgas perros 10 a 20kg',
        precio: 115,
        imagen: '../assets/images/productos_bravecto_500mg_Antipulgas_10_20kg.png'
    },
    {
        id: 17,
        nombre: 'Bravecto 1000mg Antipulgas perros 20 a 40kg',
        precio: 149,
        imagen: '../assets/images/productos_bravecto_1000mg_Antipulgas_20_40kg.png'
    },
    {
        id: 18,
        nombre: 'Bravecto 112.5mg Antipulgas perros 2 a 4.5kg',
        precio: 106,
        imagen: '../assets/images/productos_bravecto_112.5mg_Antipulgas_2_4.5kg.png'
    }
];


let carrito = [];
const divisa = 'S/';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonComprar = document.querySelector('#boton-comprar');

// Funciones

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
}

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

function generarBoleta() {
    let ventanaBoleta = window.open('', 'Boleta', 'width=600,height=400');
    ventanaBoleta.document.write('<h1>Boleta de Compra</h1>');
    ventanaBoleta.document.write('<table border="1">');
    ventanaBoleta.document.write('<tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr>');
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        ventanaBoleta.document.write('<tr>');
        ventanaBoleta.document.write(`<td>${miItem[0].nombre}</td>`);
        ventanaBoleta.document.write(`<td>${numeroUnidadesItem}</td>`);
        ventanaBoleta.document.write(`<td>${divisa}${miItem[0].precio}</td>`);
        ventanaBoleta.document.write(`<td>${divisa}${(miItem[0].precio * numeroUnidadesItem).toFixed(2)}</td>`);
        ventanaBoleta.document.write('</tr>');
    });
    ventanaBoleta.document.write('<tr>');
    ventanaBoleta.document.write('<td colspan="3" style="text-align:right;"><strong>Total</strong></td>');
    ventanaBoleta.document.write(`<td>${divisa}${calcularTotal()}</td>`);
    ventanaBoleta.document.write('</tr>');
    ventanaBoleta.document.write('</table>');
    ventanaBoleta.document.write('<button onclick="print()">Imprimir</button>');
    ventanaBoleta.document.close();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonComprar.addEventListener('click', generarBoleta);

// Inicio
renderizarProductos();
renderizarCarrito();
