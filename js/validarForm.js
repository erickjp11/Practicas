var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-\.]+$/;
var regNombre = /^[a-zA-Z ]+$/;

$(document).ready(function(){

  $("#crear").click(function(){
    var nombre = $("#nombre").val();
    var apellido = $("#ap").val();
    var valCorreo = $("#correo").val();
    var pwd = $("#contrasena").val();
    var confirmar = $("conf_contrasena").val();
    var sel = $("#uni option:selected");

    if (nombre == ""){
      $("#error1").fadeIn();
      return false;
    }

    else if (nombre.length < 3 || !regNombre.test(nombre)) {
      $("#error2").fadeIn();
      return false;
    }

    else {
      $("error1").fadeOut();

    if (apellido == "") {
      $("#errorap").fadeIn();
      return false;
    }
    else if (apellido.length < 3 || !regNombre.test(apellido)) {
      $("#error2").fadeIn();
      return false;
    }
    else {
       $("errorap").fadeOut();
    if (valCorreo == "" || !expr.test(valCorreo)){
      $("#errorCorreo").fadeIn();
      return false;
    }
    else {
      $("#errorCorreo").fadeOut();

    if (pwd == "" || pwd.length < 8){
      $("errorCont").fadeIn();
      return false;
    }
    else {
      $("#errorCont").fadeOut();
    if (regContr.test(confirmar) == contr){
      $("coinciden").fadeIn();
      return false;
    }
    else {
      $("errorConf").fadeIn();

    if (sel.val() == ""){
      $("#selUni").fadeIn();
    }
  }
}
}
}
}
  });
});
