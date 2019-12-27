$(function(){
  $('.mobile-tab').hide();
  $('.tech-info').hide();


  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(600)
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

//mainfn();


});
