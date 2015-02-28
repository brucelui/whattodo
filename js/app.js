//stores the tasks
// var taskBank = [];
var animationend = ('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
var taskArray = [];
var taskNumber = '0';

var createTask = function(){
	//takes whatever is in the input and pushes it
	// if (taskNumber != 0) {
	// 	taskBank.push($('input').val());
	// }

	//takes the input object
	var $taskBank = $('input').val();
	if ($taskBank.length > 0) {
		$('ul').append('<li class="tasks">' + $taskBank + '</li>');
		
	}

	// $('.taskhold').html('<li>'+taskBank+'</li>');
	//resets input value
	$('input').val('');
}


//when clicked on button then task gets created
$(document).ready(function() {
	$('.addBtn').click(function() {

		$('button[class=addBtn]').addClass('animated bounce').one(animationend, function() {
			$(this).removeClass('animated bounce');

			createTask();

			$('li[class=tasks]').addClass(taskNumber + ' ' + 'animated flipInX').one(animationend, function() {
				$(this).removeClass('animated flipInX');
			});
		});

		taskNumber++;
		console.log(taskNumber);


		
	});
});