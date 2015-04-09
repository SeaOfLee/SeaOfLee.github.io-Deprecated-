// changes background color/border to project images when moused over
$(function() {
$('.project_img')
  .on('mouseenter',
    function() {
      $(this).css('background', '#D0D0D0');
    })

  .on('mouseleave',
    function() {
      $(this).css('background', '#A8A8A8');
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
      $(this).attr('src', 'img/project_TTT.jpg');
    })

  .on('mouseleave',
    function() {
      $(this).attr('src', 'img/project_TTT_gray.jpg');
    });
});