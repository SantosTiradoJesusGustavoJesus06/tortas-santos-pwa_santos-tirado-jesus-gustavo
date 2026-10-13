# Proyecto PWA - Tortas Santos

**Nombre del estudiante:** Santos Tirado Jesús Gustavo  
**Grupo:** TDSM10-1  
**Negocio:** Tortas Santos  
**Giro:** Tortería Mexicana (Alimentos y Bebidas)  

* **URL del repositorio:** https://github.com/SantosTiradoJesusGustavoJesus06/tortas-santos-pwa_santos-tirado-jesus-gustavo
* **URL de GitHub Pages:** https://santostiradojesusgustavojesus06.github.io/tortas-santos-pwa_santos-tirado-jesus-gustavo/

---

## Descripción del Proyecto
Aplicación Web Progresiva (PWA) desarrollada para la tortería **Tortas Santos**. Permite a los clientes consultar el catálogo completo de productos, bebidas y complementos, realizar pedidos en línea y acceder a información clave del establecimiento desde dispositivos móviles y de escritorio.

---

## Historial de Avances

| Avance | Descripción | Estado |
| :--- | :--- | :--- |
| 1 | (hash del avance 1) | 11/10/2026 |
| 2 | (hash del avance 2) | 18/10/2026 |
| 3 | (hash del avance 3) | 25/10/2026 |
| 4 | (se escribe en el reporte PDF) | 01/11/2026 |

---

## Estructura del Proyecto (Avance 1)

```text
tortas-santos-pwa_santos-tirado-jesus-gustavo/
├── index.html          # App Shell base y contenedor del catálogo
├── catalogo.json       # Datos de los 15 productos en formato JSON
├── README.md           # Documentación principal del proyecto
├── css/
│   └── estilos.css     # Estilos responsivos con paleta de color propia
├── js/
│   └── csr.js          # Renderizado del lado del cliente (CSR) usando fetch()
└── img/                # Imágenes de productos (<= 300 KB) y logo

## Estructura del proyecto (Avance 2)

🌮 Tortas Santos - Catálogo (SSR vs CSR)

Alumno: Jesús Gustavo Santos Tirado

🔍 Ver Código Fuente: SSR vs CSR

1. SSR (Server-Side Rendering)

Los productos vienen completamente inyectados e iterados desde el servidor en el HTML inicial:

<div class="catalogo-grid" id="catalogo-grid">
    <div class="card" data-categoria="Tortas Clásicas">
        <h3 class="card-title">Torta Cubana</h3>
        <span class="card-price">$110.00</span>
    </div>
    <!-- ... más productos renderizados por el servidor ... -->
</div>

(Insertar captura de código fuente SSR aquí)

2. CSR (Client-Side Rendering)

El contenedor llega vacío desde el servidor y JavaScript inyecta los elementos en tiempo de ejecución:

<div class="catalogo-grid" id="catalogo-grid">
    <!-- El contenedor llega vacío; JavaScript poblará las tarjetas dinámicamente -->
</div>

(Insertar captura de código fuente CSR aquí)