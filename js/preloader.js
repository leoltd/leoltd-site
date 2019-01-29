var preloader = document.getElementsByClassName('indexload_animation')[0];

if(intro == false){
	preloader.style = 'height: ' + window.innerHeight + 'px; width: ' + window.innerWidth + 'px;';

	function preloaderAnimation(){
		$("#indexload_animation").fadeOut(1000);
	}
	setTimeout(preloaderAnimation, 100);
}else{
	preloader.style = 'display: none;'
}