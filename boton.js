$(document).ready(main);
var con=1;
function 	main() {
	$('.menu_bar').click(function(){
		if(con==1){
			$('nav').animate({
				left:'0'
			});
			con=0;
		}else{
			con=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
};
