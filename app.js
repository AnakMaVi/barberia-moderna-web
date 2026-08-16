document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const msg = document.getElementById('confirmation-msg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const servicio = document.getElementById('servicio').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      msg.classList.remove('hidden');
      msg.innerHTML = `✅ ¡Cita Reservada con Éxito!<br><br>👤 <strong>${nombre}</strong><br>✂️ <strong>${servicio}</strong><br>📅 <strong>${fecha}</strong> a las ⏰ <strong>${hora}</strong>`;
      form.reset();
    });
  }
});