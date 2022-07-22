$(function () {
  $('.dropDown ul').hide();
  $('.dropDown-l ul').hide()
  $('.dropDown').mouseenter(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideDown();
  })
  $('.dropDown').mouseleave(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideUp();
  })
  $('.dropDown-l').mouseenter(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideDown();
  })
  $('.dropDown-l').mouseleave(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideUp();
  })
})