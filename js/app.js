//stores the tasks
// var taskBank = [];

var createTask = function(){
	//takes whatever is in the input and pushes it
	// if (taskNumber != 0) {
	// 	taskBank.push($('input').val());
	// }

	//takes the input object
	var $taskBank = $('input').val();

	if ($taskBank.length > 0) {
		$('ul').append('<li>' + $taskBank + '</li>');
	}
	// $('.taskhold').html('<li>'+taskBank+'</li>');

	//resets input value
	$('input').val('');
}


//when clicked on button then task gets created
$(document).ready(function() {
	$('.addBtn').click(function() {
		createTask();
	});
});