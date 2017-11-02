var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-\.]+$/;
var regNombre = /^[a-zA-Z ]+$/;
var regPrecio = /^[0-9., ]+$/;

$(document).ready(function(){

  $("#nombre").focusout(function(){
    var nombre = $("#nombre").val();

    if (nombre == ""){
      $("#error2").fadeOut();
      $("#error3").fadeOut();
      $("#error1").fadeIn();
      return false;
    }
    else if (!regNombre.test(nombre)) {
      $("#error1").fadeOut();
      $("#error3").fadeOut();
      $("#error2").fadeIn();
      return false;
    }
    else if (nombre.length < 3) {
      $("#error1").fadeOut();
      $("#error2").fadeOut();
      $("#error3").fadeIn();
      return false;
    }
    else {
      $("#error1").fadeOut();
      $("#error2").fadeOut();
      $("#error3").fadeOut();
    }
  });

  $("#apellido").focusout(function(){
    var apellido = $("#apellido").val();

    if (apellido == ""){
      $("#errorapellido2").fadeOut();
      $("#errorapellido1").fadeIn();
      return false;
    }
    else if (!regNombre.test(apellido)) {
      $("#errorapellido1").fadeOut();
      $("#errorapellido2").fadeIn();
      return false;
    }
    else {
      $("#errorapellido1").fadeOut();
      $("#errorapellido2").fadeOut();
    }
  });

  $("#correo").focusout(function(){
    var valCorreo = $("#correo").val();

    if (valCorreo == ""){
      $("#errorCorreo2").fadeOut();
      $("#errorCorreo1").fadeIn();
      return false;
    }
    else if (!expr.test(valCorreo)) {
      $("#errorCorreo1").fadeOut();
      $("#errorCorreo2").fadeIn();
      return false;
    }
    else {
      $("#errorCorreo1").fadeOut();
      $("#errorCorreo2").fadeOut();
    }
  });

  $("#contrasena").focusout(function(){
    var contrasena = $("#contrasena").val();

    if (contrasena.length < 8){
      $("#errorContrasena").fadeIn();
      return false;
    }
    else {
      $("#errorContrasena").fadeOut();
    }
  });

  $("#conf_contrasena").focusout(function(){
    var confirmarContrasena = $("#conf_contrasena").val();
    var contrasena = $("#contrasena").val();

    if (confirmarContrasena == ""){
      $("#errorConf2").fadeOut();
      $("#errorConf1").fadeIn();
      return false;
    }
    else if (confirmarContrasena != contrasena) {
      $("#errorConf1").fadeOut();
      $("#errorConf2").fadeIn();
      return false;
    }
    else {
      $("#errorConf1").fadeOut();
      $("#errorConf2").fadeOut();
    }
  });

  $("#contrasena_anterior").focusout(function(){
    var contrasenaAnterior = $("#contrasena_anterior").val();

    if (contrasenaAnterior == ""){
      $("#errorContrasenaAnt").fadeIn();
      return false;
    }
    else {
      $("#errorContrasenaAnt").fadeOut();
    }
  });

  $("#nombreP").focusout(function(){
    var nombreProducto = $("#nombreP").val();

    if (nombreProducto == ""){
      $("#errorNombrep").fadeIn();
      return false;
    }
    else {
      $("#errorNombrep").fadeOut();
    }
  });

  $("#descripcion").focusout(function(){
    var descripcion = $("#descripcion").val();

    if (descripcion == ""){
      $("#errorDescripcion").fadeIn();
      return false;
    }
    else {
      $("#errorDescripcion").fadeOut();
    }
  });

  $("#precio").focusout(function(){
    var precio = $("#precio").val();

    if (precio == ""){
      $("#errorPrecio2").fadeOut();
      $("#errorPrecio1").fadeIn();
      return false;
    }
    else if (!regPrecio.test(precio)) {
      $("#errorPrecio1").fadeOut();
      $("#errorPrecio2").fadeIn();
      return false;
    }
    else {
      $("#errorPrecio1").fadeOut();
      $("#errorPrecio2").fadeOut();
    }
  });
});
