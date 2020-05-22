$(function(){
  $('.mobile-tab').hide();
  $('.tech-info').hide();


  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(399)
  })


  $('#u1').html("to_main.js is on");

function hide_data(){
  $('#bt').on('click', function(){
    $('#u1').slideToggle(1299);
  })
}

hide_data();

function mainfn(){
  $('#dat').html('mainfn function!!!');
}

$('#mod').on('mouseenter',function(){
  $('#mod1').fadeIn(200)
}).on('mouseleave', function(){
  $('#mod1').fadeOut(200)
})
$('#ier').on('mouseenter',function(){
  $('#ier1').fadeIn(200)
}).on('mouseleave', function(){
  $('#ier1').fadeOut(200)
})
//mainfn();


});
