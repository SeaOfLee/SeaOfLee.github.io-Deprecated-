// adds animation to project images when moused over
$(function() {
$('.project_img')
  .on('mouseenter',
    function() {
      $(this).addClass('animated bounce');
    })

  .on('mouseleave',
    function() {
      $(this).removeClass('animated bounce');
    });
});

$(function() {
$('#offerup')
  .on('mouseenter',
    function() {
      $(this).attr('src', 'img/project_offerup.jpg');
    })

  .on('mouseleave',
    function() {
      $(this).attr('src', 'img/project_offerup_gray.jpg');
    });
});

$(function() {
$('#alumly')
  .on('mouseenter',
    function() {
      $(this).attr('src', 'img/project_alumly.jpg');
    })

  .on('mouseleave',
    function() {
      $(this).attr('src', 'img/project_alumly_gray.jpg');
    });
});

$(function() {
$('#blog')
  .on('mouseenter',
    function() {
      $(this).attr('src', 'img/project_blog.jpg');
    })

  .on('mouseleave',
    function() {
      $(this).attr('src', 'img/project_blog_gray.jpg');
    });
});

$(function() {
$('#ttt')
  .on('mouseenter',
    function() {
      $(this).attr('src', 'img/project_ttt.jpg');
    })

  .on('mouseleave',
    function() {
      $(this).attr('src', 'img/project_ttt_gray.jpg');
    });
});