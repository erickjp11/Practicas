$(document).ready(function(){

  $("#nombre").focusout(function(){
    var nombre = $("#nombre").val();

    if (nombre == ""){
      $("#error1").fadeIn();
      return false;
    }
    else {
      $("error1").fadeOut();
    }
  });
});
  
