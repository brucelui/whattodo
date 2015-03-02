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
		$('ul').append('<li class="tasks" id="tasks">' + $taskBank + '</li>');
		//assign new event handlers to new tasks
		$('.tasks').hammer().on('swiperight swipeleft', function() {
			//deletes the task
			$(this).css({
				"-webkit-transition": "-webkit-transform 1s ease-in-out",
		 	    "-webkit-transform":"translate(500px)",
		  	    "-ms-transform":"translate(500px)",
		  	    "transform":"translate(500px)"
		 	}).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
		 		$(this).slideUp(300, function() {
					$(this).remove();
				}); 
		 	});
		    console.log('omgitworks');

		});
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

//when you swiperight a task

$(window).load(function() {
		
	var deleteTask = function(){
		$('#tasks').hammer().on('swiperight swipeleft', function() {
//			$(this).css('transform: translateX(this.position)');
			//deletes the task
			$(this).css({
				"-webkit-transition": "-webkit-transform 1s ease-in-out",
		 	    "-webkit-transform":"translate(500px)",
		  	    "-ms-transform":"translate(500px)",
		  	    "transform":"translate(500px)"
		 	}).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
		 		$(this).slideUp(300, function() {
					$(this).remove();
				}); 
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
