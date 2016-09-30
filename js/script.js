$(document).ready(function(){
  $("#navbar-mobile").hide();
  $(".open-menu").click(function(){
    $("#navbar-mobile").toggle("slide", "top", 500);
  });
  swal("Here's a message!", "It's pretty, isn't it?")
});
