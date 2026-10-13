let carrito = [];
let categoriaActual = 'todos';

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.categorias-container button');
    
    botones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botones.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            
            const idBtn = e.target.id;
            if (idBtn === 'btn-todos') categoriaActual = 'todos';
            else if (idBtn === 'btn-tortas') categoriaActual = 'Tortas Clásicas';
            else if (idBtn === 'btn-especiales') categoriaActual = 'Especiales';
            else if (idBtn === 'btn-bebidas') categoriaActual = 'Bebidas y Extras';

            aplicarFiltroCategoria();
        });
    });
});

function aplicarFiltroCategoria() {
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        const catTarjeta = tarjeta.getAttribute('data-categoria');
        if (categoriaActual === 'todos' || catTarjeta === categoriaActual) {
            tarjeta.style.display = 'flex';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function agregarDesdeBoton(button) {
    const nombre = button.getAttribute('data-nombre');
    const precio = parseFloat(button.getAttribute('data-precio'));
    agregarAlCarrito(nombre, precio);
}

function agregarAlCarrito(nombre, precio) {
    const encontrado = carrito.find(item => item.nombre === nombre);
    if (encontrado) {
        encontrado.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    renderizarCarrito();
}

function cambiarCantidad(nombre, delta) {
    const item = carrito.find(i => i.nombre === nombre);
    if (item) {
        item.cantidad += delta;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(nombre);
        } else {
            renderizarCarrito();
        }
    }
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(i => i.nombre !== nombre);
    renderizarCarrito();
}

function renderizarCarrito() {
    const contenedor = document.getElementById('lista-carrito');
    const totalEl = document.getElementById('total-carrito');
    
    if (!contenedor || !totalEl) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p style="color: var(--text-muted); margin-top: 10px;">El carrito está vacío.</p>';
        totalEl.innerText = 'Total: $0.00';
        return;
    }

    let html = '';
    let total = 0;

    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += `
            <div class="item-carrito">
                <span><strong>${item.nombre}</strong> - $${item.precio.toFixed(2)} x ${item.cantidad} = $${subtotal.toFixed(2)}</span>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="controles-cantidad">
                        <button type="button" onclick="cambiarCantidad('${item.nombre}', -1)">-</button>
                        <button type="button" onclick="cambiarCantidad('${item.nombre}', 1)">+</button>
                    </div>
                    <button type="button" class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
    totalEl.innerText = `Total: $${total.toFixed(2)}`;
}