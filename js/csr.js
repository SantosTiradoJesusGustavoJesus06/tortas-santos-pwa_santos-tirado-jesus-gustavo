document.addEventListener('DOMContentLoaded', () => {
    cargarCatalogo();
});

function cargarCatalogo() {
    const container = document.getElementById('catalogo-container');

    fetch('catalogo.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el catálogo JSON');
            }
            return response.json();
        })
        .then(productos => {
            container.innerHTML = ''; // Limpiar mensaje de carga

            productos.forEach(producto => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img" onerror="this.src='https://via.placeholder.com/300x170?text=Producto'">
                    <div class="card-body">
                        <span class="card-category">${producto.categoria}</span>
                        <h3 class="card-title">${producto.nombre}</h3>
                        <div class="card-footer-info">
                            <span class="card-price">$${producto.precio} MXN</span>
                            <button class="btn-agregar" onclick="alert('Producto agregado: ${producto.nombre}')">Agregar</button>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            container.innerHTML = '<p style="color: red;">No se pudo cargar el catálogo de productos.</p>';
        });
}