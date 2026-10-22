// js/notificaciones.js — Control de permisos y visualización de notificaciones
document.addEventListener("DOMContentLoaded", () => {
  const btnNotificar = document.getElementById("btn-notificar");
  const mensajeNoti = document.getElementById("notificaciones-mensaje");

  if (!btnNotificar) return;

  btnNotificar.addEventListener("click", async () => {
    // 1. Verificar si el navegador soporta notificaciones
    if (!("Notification" in window)) {
      if (mensajeNoti) mensajeNoti.textContent = "Este navegador no soporta notificaciones.";
      return;
    }

    // 2. Si ya están concedidas, lanzar la notificación directamente
    if (Notification.permission === "granted") {
      if (mensajeNoti) mensajeNoti.textContent = "¡Notificaciones activadas y funcionando!";
      lanzarNotificacion();
      return;
    }

    // 3. Si no han sido denegadas, solicitar el permiso formalmente al navegador
    if (Notification.permission !== "denied") {
      const permiso = await Notification.requestPermission();
      if (permiso === "granted") {
        if (mensajeNoti) mensajeNoti.textContent = "¡Permiso concedido con éxito!";
        lanzarNotificacion();
      } else {
        if (mensajeNoti) mensajeNoti.textContent = "Permiso de notificaciones denegado.";
      }
    } else {
      if (mensajeNoti) {
        mensajeNoti.textContent = "Las notificaciones están bloqueadas. Habilítalas en el ícono de la barra de direcciones.";
      }
    }
  });
});

function lanzarNotificacion() {
  const opciones = {
    body: "¡Gracias por activar las alertas! Te avisaremos de promociones y estatus de tus pedidos en Tortas Santos 🍔.",
    icon: "img/LOGO_STJG.png",
    badge: "img/LOGO_STJG.png"
  };

  // Intentar mostrar mediante el Service Worker o con la API nativa de ventanas
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Tortas Santos 🛒", opciones);
    });
  } else {
    new Notification("Tortas Santos 🛒", opciones);
  }
}