# Proyecto PWA - Tortas Santos

**Nombre del estudiante:** Santos Tirado, Jesús Gustavo  
**Grupo:** TDSM10-1  
**Negocio:** Tortas Santos  
**Giro:** Tortería Mexicana (Alimentos y Bebidas)  
**Hash de Identificación (Avance 1):** `6a6f295`

- **URL del repositorio:** [GitHub Repository](https://github.com/SantosTiradoJesusGustavoJesus06/tortas-santos-pwa_santos-tirado-jesus-gustavo)
- **URL de GitHub Pages:** [GitHub Pages](https://santostiradojesusgustavojesus06.github.io/tortas-santos-pwa_santos-tirado-jesus-gustavo/)

---

## Descripción del Proyecto
Aplicación Web Progresiva (PWA) desarrollada para la tortería **Tortas Santos**. Permite a los clientes consultar el catálogo completo de productos, bebidas y complementos, realizar pedidos en línea interactivos con persistencia local (`localStorage`) y acceder a información clave del establecimiento desde dispositivos móviles y de escritorio.

---

## Historial de Avances e Identificación de Commits

| Avance | Commit Hash | Descripción del Cambio | Referencia |
| :--- | :--- | :--- | :--- |
| **Avance 1** | `6a6f295` | Estructura base, App Shell, maquetación responsiva y recursos estáticos. | Versión Inicial |
| **Avance 2** | `08fe65c` | Estructura final del README con comparativa SSR vs CSR y capturas. | Documentación técnica |
| **Corrección** | `aa8b514` | Corrección de persistencia del carrito utilizando `localStorage`. | Ajuste de Lógica |

---

## Estructura del Proyecto

```text
tortas-santos-pwa_santos-tirado-jesus-gustavo/
├── index.html          # App Shell base y contenedor del catálogo (CSR)
├── catalogo.json       # Datos de los 15 productos en formato JSON
├── README.md           # Documentación principal del proyecto
├── css/
│   └── estilos.css     # Estilos responsivos con paleta de color propia
├── js/
│   ├── csr.js          # Renderizado del lado del cliente (CSR) usando fetch()
│   └── carrito.js      # Lógica del carrito, filtros y persistencia con localStorage
└── docs/               # Capturas de pantalla requeridas por la rúbrica
    ├── captura-ssr.png
    └── captura-csr.png

Estructura y Arquitectura (Avance 2)
🌮 Tortas Santos - Catálogo (SSR vs CSR)

Alumno: Santos Tirado, Jesús Gustavo (Identificación Hash Avance 1: 6a6f295)

🔍 Comparativa de Código Fuente: SSR vs CSR
1. SSR (Server-Side Rendering — Django)
Los productos vienen completamente inyectados e iterados desde el servidor en el HTML inicial:

<div class="catalogo-grid" id="catalogo-grid">
    {% for producto in productos %}
        <div class="card" data-categoria="{{ producto.categoria }}">
            <img src="{% static producto.imagen %}" alt="{{ producto.nombre }}" class="card-img" onerror="this.src='[https://via.placeholder.com/150?text=Tortas+Santos](https://via.placeholder.com/150?text=Tortas+Santos)'">
            <div class="card-body">
                <span class="card-category">{{ producto.categoria }}</span>
                <h3 class="card-title">{{ producto.nombre }}</h3>
                <div class="card-footer-info">
                    <span class="card-price">${{ producto.precio|floatformat:2 }}</span>
                    <button type="button" class="btn-agregar" data-nombre="{{ producto.nombre }}" data-precio="{{ producto.precio }}" onclick="agregarDesdeBoton(this)">Agregar</button>
                </div>
            </div>
        </div>
    {% empty %}
        <p>No hay productos disponibles en este momento.</p>
    {% endfor %}
</div>

2. CSR (Client-Side Rendering — JavaScript)
El contenedor llega vacío desde el servidor y JavaScript inyecta los elementos en tiempo de ejecución:

<div class="catalogo-grid" id="catalogo-grid">
    <!-- El contenedor llega vacío; JavaScript poblará las tarjetas dinámicamente vía fetch() -->
</div>