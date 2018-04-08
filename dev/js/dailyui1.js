
/* Recoger todos los elementos que solo forman parte del registro y de
 * la parte de acceso.
 *
 * En un principio todos están ocultos. Cuando se pulsa sobre el botón de
 * "Registrarse", se muestran todos. De igual forma, hay elementos que solo
 * forman parte del acceso, como es el caso de "Contraseña olvidada". Estos
 * elementos serán ocultados cuando los de "Registrarse" estén visibles.
 */

const registerItems = [...document.getElementsByClassName('register-item')];
const loginItems = [...document.getElementsByClassName('login-item')];

// Recoger los botones de registro y de cancelar
const registerButton = document.getElementById('register-button');
const cancelButton = document.getElementById('cancel-button');
const forgotLink = document.getElementById('forgot-link');
const cancelForgotButton = document.getElementById('cancel-forgot-button');

/* Añadir el evento de click al botón de registro. Cuando se pulse, este botón
 * mostrará todos los elementos de la parte de registro.
 */

registerButton.addEventListener('click', (e)=> {
    registerItems.map( element => element.classList.remove('hidden'));
    loginItems.map( element => element.classList.add('hidden'));
});

cancelButton.addEventListener('click', (e)=> {
    registerItems.map(element => element.classList.add('hidden'));
    loginItems.map(element => element.classList.remove('hidden'));
});

forgotLink.addEventListener('click', (e)=> {
    document.getElementsByClassName('form__main')[0].classList.add('hidden');
    document.getElementsByClassName('forgot-container')[0].classList.remove('hidden');
});

cancelForgotButton.addEventListener('click', (e)=> {
    document.getElementsByClassName('form__main')[0].classList.remove('hidden');
    document.getElementsByClassName('forgot-container')[0].classList.add('hidden');
});
