// VALIDACIÓN FORMULARIO

// Selecciona el formulario de contacto y agrega un evento de envío
let formularioContacto = document.querySelector(".contacto form");

if (formularioContacto) {
  formularioContacto.addEventListener("submit", function (e) {
    // Obtener los valores de los campos y limpiar espacios extra
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // Array para almacenar mensajes de error
    let errores = [];

    // Validar Teléfono: solo números y al menos 7 dígitos
    if (!/^\d{7,}$/.test(telefono)) {
      errores.push(
        "Introduce un número de teléfono válido (solo números, mínimo 7 dígitos)."
      );
    }

    // Validar Email: formato básico de correo electrónico
    if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) {
      errores.push("Introduce un correo electrónico válido.");
    }

    // Validar Mensaje: mínimo 5 caracteres
    if (mensaje.length < 5) {
      errores.push("El mensaje debe tener al menos 5 caracteres.");
    }

    // Si hay errores, prevenir el envío y mostrar alerta
    if (errores.length > 0) {
      e.preventDefault(); // Detiene el envío del formulario
      alert(
        "Por favor corrige los siguientes errores:\n\n" + errores.join("\n")
      );
    } else {
      // Mostrar mensaje de éxito (opcional: puedes quitar el e.preventDefault si envías realmente)
      alert("Muchas gracias por tu mensaje, te respondemos pronto 🤍🎀");
      // El formulario se enviará normalmente después de la alerta
    }
  });
}
