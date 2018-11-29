$('.item').click(function() {
  $('.dropdown_menu').removeClass('show');
  // $(this).children('.dropdown_menu').slideDown();

  var thisSingoloMenu = $(this).children('.dropdown_menu');
  thisSingoloMenu.addClass('show');

});
