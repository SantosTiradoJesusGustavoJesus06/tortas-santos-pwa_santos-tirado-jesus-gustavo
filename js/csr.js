let todosLosProductos = [];

// Cargar los productos desde el archivo JSON local
fetch('catalogo.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo catalogo.json');
    }
    return response.json();
  })
  .then(data => {
    todosLosProductos = data;
    mostrarProductos(todosLosProductos);
  })
  .catch(error => {
    console.error('Error al obtener el catálogo:', error);
    const contenedor = document.getElementById('catalogo-container');
    if (contenedor) {
      contenedor.innerHTML = '<p style="color: red;">Error al cargar los productos del catálogo.</p>';
    }
  });

function mostrarProductos(productos) {
  const contenedor = document.getElementById('catalogo-container');
  if (!contenedor) return;
  
  contenedor.innerHTML = '';

  if (productos.length === 0) {
    contenedor.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
    return;
  }

  productos.forEach(prod => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto'; // Asegúrate de tener estilos para esta clase en tu CSS
    tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" style="width:100%; height:140px; object-fit:cover; border-radius:6px;" onerror="this.src='https://via.placeholder.com/150?text=Tortas+Santos'">
      <div style="padding: 0.5rem 0;">
        <span style="font-size: 0.75rem; background: #ffebee; color: #c62828; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${prod.categoria}</span>
        <h3 style="font-size: 1rem; margin: 0.4rem 0;">${prod.nombre}</h3>
        <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">${prod.descripcion}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
          <span style="font-weight: bold; color: #2e7d32; font-size: 1.1rem;">$${Number(prod.precio).toFixed(2)}</span>
          <button onclick="agregarAlCarrito(${prod.id}, '${prod.nombre.replace(/'/g, "\\'")}', ${prod.precio})" style="background: #0e6b5c; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer;">Agregar</button>
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
}

function filtrarProductos(categoria) {
  if (categoria === 'todos') {
    mostrarProductos(todosLosProductos);
  } else {
    const filtrados = todosLosProductos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
    mostrarProductos(filtrados);
  }
}