$(function () {
 $('.slick-carousel').slick({
   autoplay:true,
   dots:true,
   infinity:true,
   autoplaySpeed:3000,
   arrows:false,
   fade:true
 });
 $('a').hover(
  function () {
    $(this).animate({ 'opacity': 0.6 }, 300);
  },
  function () {
    $(this).animate({ 'opacity': 1.0 }, 300);
  }
);
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#top-btn').fadeIn();
  } else {
    $('#top-btn').fadeOut();
  }
});
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('section').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});
$('.works img').click(function () {
  const imgSrc = $(this).attr('src');
  $('.big-img').attr('src', imgSrc);
  $('.modal').fadeIn();
  return false
});
$('.close-btn').click(function () {
  $('.modal').fadeOut();
  return false
});
}); 