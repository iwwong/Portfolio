// $(".mobile-nav").click(function() {
//   // $(".mobile-menu-items").fadeToggle(400);
//   $(".mobile-menu-items")();
//   return false;
// });
//
// $(window).click(function() {
//   if ($(".mobile-menu-items").is(":visible")) {
//     $(".mobile-menu-items").fadeToggle(400);
//   }
// });

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
  e.style.display = 'none';
  else
  e.style.display = 'block';
}
