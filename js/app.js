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
<<<<<<< Updated upstream
		$('ul').append('<li class="tasks">' + $taskBank + '</li>');
		
=======
		$('ul').append('<li class="tasks" id="tasks">' + $taskBank + '</li>');
		//assign new event handlers to new tasks
		$('.tasks').hammer().on('swiperight', function() {
			//deletes the task
			$(this).hide(100, function() {
		    	$(this).remove();
			}); 
		});
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
		
	});
});

//when you swiperight a task

$(window).load(function() {
		
	var deleteTask = function(){
		$('#tasks').hammer().on('swiperight', function() {
			
			//deletes the task
			$(this).hide(100, function() {
		    	$(this).remove();
			}); 
		    console.log('omgitworks');
		});
	};
	deleteTask();
});



// $(window).load(function() {
		
// 		$('#tasks').click( function() {
// 		    console.log('omgitworks');
// 		});
// });
