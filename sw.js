if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise(i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()}).then(()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e}));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const f=e=>a(e,n),o={module:{uri:n},exports:s,require:f};i[n]=Promise.all(r.map(e=>o[e]||f(e))).then(e=>(c(...e),s))}}

define(["./workbox-ed2158a8"],function(e){"use strict";
  self.skipWaiting();
  e.clientsClaim();

  // 1. Precaché de todos los recursos (imágenes, CSS, JS, HTML, JSON)
  e.precacheAndRoute([
    {url:"manifest.json",revision:"a95a4a5e8f9e8e05692c2e594a4186dc"},
    {url:"index.html",revision:"a1a6b2f712cf337dd842c35fe93448c6"},
    {url:"catalogo.json",revision:"7245baf38993925a16efefa7fdf68498"},
    {url:"js/notificaciones.js",revision:"1e1c9132f3fdc5d7af13174377d01434"},
    {url:"js/geolocalizacion.js",revision:"84336c429ea5a48f80318c81a3135b60"},
    {url:"js/csr.js",revision:"af6ee3a6d46c7c7eb77b74f16f223b6c"},
    {url:"js/carrito.js",revision:"e6c482f6c2376bfc282fd55007f26f90"},
    {url:"js/app.js",revision:"aca46fc1f684e9d2fc3c3f8d05b2a19c"},
    {url:"img/torta-vegetariana.png",revision:"5ea1804fbd806800783a15175f671abe"},
    {url:"img/torta-de-pastor.png",revision:"fd75e0811284ed24de669f98b2a06b55"},
    {url:"img/torta-de-milanesa.png",revision:"94011bb6d7950ac396b54580ca923a51"},
    {url:"img/torta-de-chilaquiles.png",revision:"20616220e04cceaebf397ca7434b4c99"},
    {url:"img/torta-cubana.png",revision:"607036aba49f7b473164beb55e7da2af"},
    {url:"img/torta-asada.png",revision:"9ae730ad2ff051dc5caf84ffdda59c51"},
    {url:"img/torta-ahogada.png",revision:"c54938bb06aa6254bb1583bfdc858fef"},
    {url:"img/santos-especial.png",revision:"b07f293338f6133d5df7a2381b71d291"},
    {url:"img/refresco.png",revision:"9074e3b8da23d35f74961a5f4683f1dd"},
    {url:"img/pierna-adobada.png",revision:"7005d7148a6bb771ba963d5bc6e68d51"},
    {url:"img/papas-fritas.png",revision:"6fff19944a31c395dc4d3d4eec610f50"},
    {url:"img/MENU_STJG.png",revision:"4d537baa5df8b806569e29c70f92f432"},
    {url:"img/LOGO_STJG.png",revision:"9f6bbac0e36a580a9d0dc7e24fc74c0d"},
    {url:"img/licuado_de_platano.png",revision:"c84b33df45737bc152ec288e1c735543"},
    {url:"img/jamon_con_queso.png",revision:"d25add61549e74cfe5ca17f37acc2a64"},
    {url:"img/chiles_en_vinagre.png",revision:"dd570f6dc638353cc768566c8a324351"},
    {url:"img/agua-fresca.png",revision:"2e807d01967ef326c43deb8e12f2561d"},
    {url:"css/estilos.css",revision:"0d72c289ccf893d301eb39b6e90e341a"}
  ],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]});

  // 2. REGISTRAR RUTA DE NAVEGACIÓN (Solución al dinosaurio sin internet)
  // Le dice a Workbox que si no hay red al pedir la página, sirva index.html precachado
  if (e.registerRoute && e.NavigationRoute && e.createHandlerBoundToURL) {
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")));
  }
});