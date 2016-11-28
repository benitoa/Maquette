function my_download() 
{
	alert("Téléchargement en cours ...");
	var ProgressBar = require('progressbar.js');
	var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
	bar.animate(1); 
}
