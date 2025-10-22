function validartiempo(e){
    var teclado = (document.all) ? e.keycode : e.which;
    if(teclado === 8) return true;
    var regex = /[0-9dhw ]/;
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);
}