// js/notificaciones.js — Notification API para Tortas Santos
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-notificar");
  const mensaje = document.getElementById("notificaciones-mensaje");

  if (!boton) return;

  boton.addEventListener("click", () => {
    if (!("Notification" in window)) {
      if (mensaje) mensaje.textContent = "Este navegador no soporta notificaciones.";
      return;
    }

    Notification.requestPermission().then((permiso) => {
      if (permiso === "granted") {
        new Notification("Tortas Santos 🌮", {
          body: "¡Listo! Te avisaremos con promociones y el estado de tus pedidos.",
          icon: "img/LOGO_STJG.png",
        });
        if (mensaje) mensaje.textContent = "Notificaciones activadas.";
      } else {
        if (mensaje) mensaje.textContent = "No diste permiso para notificaciones.";
      }
    });
  });
});