console.log("hello");
var chanceflag = 0;

$(document).ready(function() { 		
	$( ".box" ).click(function($el,$ev) {
		/*if(chanceflag == 0){*/
			var status = $(this).attr('id');
			console.log(status);

/*			$('').text("hello world")	
			chanceflag = ! chanceflag;
		}
		else
		{
			$(status).text("bye world");
			chanceflag = ! chanceflag;
		}*/
	});
})