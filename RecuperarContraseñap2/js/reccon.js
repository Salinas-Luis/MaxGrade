function validarc(e){
    var teclado = document.all ? e.keycode : e.which
    if(teclado === 8) return true;
    var regex = /[a-zA-Z0-9\s]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);   
}

document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#loginpass');

    if (togglePassword && password) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});
