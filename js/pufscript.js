// VALIDACIÓN FORMULARIO

let formularioContacto = document.querySelector(".contacto form");

if (formularioContacto) {
  formularioContacto.addEventListener("submit", function (e) {
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    let errores = [];

    // Validar Teléfono: solo números y mínimo 7 dígitos
    if (!/^\d{7,}$/.test(telefono)) {
      errores.push(
        "Introduce un número de teléfono válido (solo números, mínimo 7 dígitos)."
      );
    }

    // Validar Email: expresión regular básica para email
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      errores.push("Introduce un correo electrónico válido.");
    }

    // Validar Mensaje: mínimo 5 caracteres
    if (mensaje.length < 5) {
      errores.push("El mensaje debe tener al menos 5 caracteres.");
    }

    if (errores.length > 0) {
      e.preventDefault();
      alert("Por favor corrige los siguientes errores:\n\n" + errores.join("\n"));
    } else {
      alert("Muchas gracias por tu mensaje, te respondemos pronto 🤍🎀");
      // El formulario se enviará normalmente después de la alerta
    }
  });
}


