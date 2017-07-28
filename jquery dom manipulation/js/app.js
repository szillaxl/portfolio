//Write your jQuery code in this file

$('#edit-header').html('The jQuery Challenge');

$('.box1').css('background-color', 'green');

$('#para1').css('font-weight', 'bold');

$('#para1').css('font-size', '30px');

$('.box2').addClass('spin');

$('#button1').click(function() {
alert('This button has been clicked');
});

$('.box3').hover(function(){
$(this).css('background-color', 'green');
}, function(){
$(this).css('background-color', 'red');
});

$('#input1').keypress(function() {
  console.log('keystrokes');
});

$('.boundaries').animate({"borderTopWidth": "150px","borderLeftWidth": "400px"}, 2000);