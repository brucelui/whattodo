//stores the tasks
var taskBank = [];

//assigns tasks to number
var taskNumber = 0;

var createTask = function(){
	//takes whatever is in the input and pushes it
	// if (taskNumber != 0) {
	// 	taskBank.push($('input').val());
	// }
	taskBank.push($('input').val());

	$('.taskhold').html('<li>'+taskBank+'</li>');
	taskNumber = taskNumber + 1;
}

//when clicked on button then task gets created
$(document).ready(function() {

	var animationName = 'animated rotateIn';
	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$('.addBtn').click(function() {
		$('button[class=addBtn]').addClass(animationName).one(animationend,
			function() {
				$(this).removeClass(animationName);
			});
		createTask();
	});
});