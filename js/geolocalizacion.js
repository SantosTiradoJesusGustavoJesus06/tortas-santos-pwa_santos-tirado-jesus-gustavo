// js/geolocalizacion.js — Ubicación y mapa a la sucursal de Tortas Santos
const SUCURSAL = {
  nombre: "Tortas Santos (Sucursal Las Lomas del Sur)",
  lat: 29.04082463643797,
  lon: -110.94099250411492,
};

function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const radioTierraKm = 6371;
  const aRadianes = (grados) => (grados * Math.PI) / 180;
  const dLat = aRadianes(lat2 - lat1);
  const dLon = aRadianes(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(aRadianes(lat1)) * Math.cos(aRadianes(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radioTierraKm * c;
}

let mapa;

function dibujarMapa(origenLat, origenLon) {
  const contenedor = document.getElementById("mapa-ruta");
  if (!contenedor) return;
  contenedor.hidden = false;

  if (!mapa) {
    mapa = L.map(contenedor);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 19,
    }).addTo(mapa);
  } else {
    mapa.eachLayer((capa) => {
      if (capa instanceof L.Marker || capa instanceof L.Polyline) mapa.removeLayer(capa);
    });
  }

  const puntoUsuario = [origenLat, origenLon];
  const puntoSucursal = [SUCURSAL.lat, SUCURSAL.lon];

  L.marker(puntoUsuario).addTo(mapa).bindPopup("Tú estás aquí").openPopup();
  L.marker(puntoSucursal).addTo(mapa).bindPopup(SUCURSAL.nombre);

  const linea = [puntoUsuario, puntoSucursal];
  const estiloLinea = { color: "#ff7a45", weight: 3, dashArray: "6 6" };

  L.polyline(linea, estiloLinea).addTo(mapa);
  mapa.fitBounds(L.latLngBounds([puntoUsuario, puntoSucursal]), { padding: [30, 30] });

  setTimeout(() => mapa.invalidateSize(), 0);
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-ubicacion");
  const mensaje = document.getElementById("ubicacion-mensaje");

  if (!boton) return;

  boton.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
      if (mensaje) mensaje.textContent = "Este dispositivo no reporta ubicación.";
      return;
    }

    if (mensaje) mensaje.textContent = "Buscando tu ubicación…";

    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const { latitude, longitude } = posicion.coords;
        const mapaUrl = `https://www.openstreetmap.org/directions?from=${latitude}%2C${longitude}&to=${SUCURSAL.lat}%2C${SUCURSAL.lon}`;

        dibujarMapa(latitude, longitude);

        if (mensaje) {
          const distanciaKm = calcularDistanciaKm(latitude, longitude, SUCURSAL.lat, SUCURSAL.lon);
          mensaje.innerHTML =
            `Línea recta de <strong>${distanciaKm.toFixed(1)} km</strong> hasta ${SUCURSAL.nombre}. ` +
            `<a href="${mapaUrl}" target="_blank" rel="noopener">Abrir en mapa</a>`;
        }
      },
      (error) => {
        if (mensaje) mensaje.textContent = "No se pudo obtener ubicación: " + error.message;
      }
    );
  });
});