document.addEventListener('DOMContentLoaded', menu);
function menu(){
	var contador=1;
	$('.tt').click(function(){
		//$('nav').toggle();
		if(contador==1){
			$('.nav-ul li').animate({
				left:'0'
			});
			contador=0;
		}else{
			contador=1;
			$('.nav-ul li').animate({
				left:'-100%'
			});
		}
	});
};
