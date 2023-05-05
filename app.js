const formulario = document.querySelector('form');
const mensajeError = document.querySelector('#mensaje-error');
const mensajeExito = document.querySelector('#mensaje-exito');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === '' || password === '') {
    mostrarMensajeError();
  } else if (password.length < 6) {
    mostrarMensajeError('La contraseña debe tener al menos 6 caracteres.');
  } else {
    mostrarMensajeExito();
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 3000);
  }
});

function mostrarMensajeError(mensaje = 'Ups! Ha habido un error. Por favor, inténtalo de nuevo.') {
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('mostrar-mensaje-error');
  setTimeout(() => {
    mensajeError.classList.remove('mostrar-mensaje-error');
  }, 3000);
}

function mostrarMensajeExito() {
  mensajeExito.classList.add('mostrar-mensaje-exito');
  setTimeout(() => {
    mensajeExito.classList.remove('mostrar-mensaje-exito');
  }, 3000);
}
