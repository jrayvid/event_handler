$(document).ready(function() {
	// when user enters text into input box and clicks submit button
	// console.log() what they have entered into input box
var enteredText = $("input").val()


$("li").on('click',function(){
    $(this).css('text-decoration', 'line-through');
  });



$("form").submit(function(e) {
	e.preventDefault();
	// console.log($("#itemDescription").val());
	$("ul").append("<li>"+$("#itemDescription").val()+ "</li>")
  $("li").css("text-transform", "capitalize");
  $('input').val(''); 
  $("li").on('click',function(){
    $(this).css('text-decoration', 'line-through');




    
  });
});






        



  // var $listItems = $('li');
  // var $newItemForm = $('#newItemForm');

  // $('li').on('click', function(){
  // 	$(this).css("background-color", "red");
  //   $(this).addClass('complete');
  //   // alert("clicked");
  // })

 // $newItemForm.on('submit', function(e) {       // When a new item is submitted
 //   e.preventDefault();                         // Prevent form being submitted
 //   var text = $('input').val();           // Get value of text input
 //   $('ul').append('<li>' + text + '</li>');      // Add item to end of the list
 // 	$('input').val('');  
 // 	                  // Empty the text input
                        
 // });

});