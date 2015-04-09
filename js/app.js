$('.project_img').on('mouseenter',
  function() {
    $(this).addClass('animated bounce');
  });

$('.project_img').on('mouseleave',
  function() {
    $(this).removeClass('animated bounce');
  });