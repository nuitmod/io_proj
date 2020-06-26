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

//menu2
$('.mobile2').hide();
$('.mobile2').on('click', function(){
  $('.mobile2').fadeToggle(200);
});
$('.bar_1').on('click', function(){
  $('.mobile2').fadeToggle(200);
  $('#main_data').css({'opacity': 0.5})
  $('#radio_data').css({'opacity': 0.5})
});
$('.mobile2').on('click', function(){
  $('#main_data').css({'opacity': 0.9})
  $('#radio_data').css({'opacity': 0.9})
})
//$('#radio_data').css({'opacity': 0.5})

//button

$('#b_main').on('click', function(){
  $('#main_data').slideToggle(500)
})

$('#b_radio').on('click', function(){
  $('#radio_data').slideToggle(500)
})


});
