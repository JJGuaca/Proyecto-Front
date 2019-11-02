document.addEventListener('DOMContentLoaded', menu);
function menu(){
	var contador=1;
	$('.Lenadings').click(function(){
		//$('nav').toggle();
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
		}else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
};