// Listado completo de productos para renderizado en el cliente (CSR)
const productosCSR = [
    { nombre: "Torta Cubana", precio: 110.00, categoria: "Tortas Clásicas", imagen: "img/torta-cubana.png" },
    { nombre: "Torta de Milanesa", precio: 95.00, categoria: "Tortas Clásicas", imagen: "img/torta-de-milanesa.png" },
    { nombre: "Jamón con Queso", precio: 75.00, categoria: "Tortas Clásicas", imagen: "img/jamon_con_queso.png" },
    { nombre: "Pierna Adobada", precio: 95.00, categoria: "Tortas Clásicas", imagen: "img/pierna-adobada.png" },
    { nombre: "Torta Ahogada", precio: 100.00, categoria: "Tortas Clásicas", imagen: "img/torta-ahogada.png" },
    { nombre: "Torta de Asada", precio: 110.00, categoria: "Especiales", imagen: "img/torta-asada.png" },
    { nombre: "Torta de Chilaquiles", precio: 85.00, categoria: "Especiales", imagen: "img/torta-de-chilaquiles.png" },
    { nombre: "Torta de Pastor", precio: 95.00, categoria: "Especiales", imagen: "img/torta-de-pastor.png" },
    { nombre: "Torta Vegetariana", precio: 80.00, categoria: "Especiales", imagen: "img/torta-vegetariana.png" },
    { nombre: "Santos Especial", precio: 130.00, categoria: "Especiales", imagen: "img/santos-especial.png" },
    { nombre: "Agua Fresca (1L)", precio: 30.00, categoria: "Bebidas y Extras", imagen: "img/agua-fresca.png" },
    { nombre: "Licuado de Plátano", precio: 45.00, categoria: "Bebidas y Extras", imagen: "img/licuado_de_platano.png" },
    { nombre: "Refresco (355ml)", precio: 30.00, categoria: "Bebidas y Extras", imagen: "img/refresco.png" },
    { nombre: "Papas Fritas", precio: 40.00, categoria: "Bebidas y Extras", imagen: "img/papas-fritas.png" },
    { nombre: "Chiles en Vinagre", precio: 15.00, categoria: "Bebidas y Extras", imagen: "img/chiles_en_vinagre.png" }
];

// Función para inyectar las tarjetas en el DOM
function renderizarCatalogoCSR(lista) {
    const grid = document.getElementById('catalogo-grid');
    if (!grid) return;
    
    grid.innerHTML = lista.map(p => `
        <div class="card" data-categoria="${p.categoria}">
            <img src="${p.imagen}" alt="${p.nombre}" class="card-img" width="400" height="300" loading="lazy" onerror="this.src='https://via.placeholder.com/150?text=Tortas+Santos'">
            <div class="card-body">
                <span class="card-category">${p.categoria}</span>
                <h3 class="card-title">${p.nombre}</h3>
                <div class="card-footer-info">
                    <span class="card-price">$${p.precio.toFixed(2)}</span>
                    <button type="button" class="btn-agregar" data-nombre="${p.nombre}" data-precio="${p.precio}" onclick="agregarDesdeBoton(this)">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Ejecutar renderizado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogoCSR(productosCSR);
});