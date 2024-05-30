const $ = (id) => document.getElementById(id)

const formulario = $("formulario")
formulario.onsubmit = (e) => {
    e.preventDefault()
    const nombre = $('nombre').value;
    const apellido = $('apellido').value;
    const edad = $('edad').value;
    const altura = $('altura').value;
    const email = $('email').value;


    if (nombre === '' || nombre.length > 50) {
        mostrarMensaje('El nombre no puede estar vacío y tampoco contener un máximo de 50 caracteres.', 'error');
        return;
    }
    if (apellido === '' || apellido.length > 50) {
        mostrarMensaje('El apellido no puede estar vacío y  tampoco contener un máximo de 50 caracteres.', 'error');
        return;
    }
    if (edad < 18) {
        mostrarMensaje('La edad no puede ser menor de 18 años.', 'error');
        return;
    }
    if (altura < 0 || altura > 230) {
        mostrarMensaje('La altura no puede ser negativa y no puede ser mayor a 230 cm.', 'error');
        return;
    }
    if (email === '' || !email.includes('@')) {
        mostrarMensaje('El correo electrónico no puede estar vacío y debe incluir el "@"', 'error');
        return;
    }
    
    mostrarMensaje('Todas las validaciones son correctas.');
}

function mostrarMensaje(texto, tipo) {
    const mensaje = $('mensaje');
    mensaje.textContent = texto;
    if (tipo === 'error') {
        mensaje.className = 'error';
    } else {
        mensaje.className = 'success';
    }
}