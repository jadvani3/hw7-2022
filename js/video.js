var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to ' + video.autoplay) 
	console.log('Looping is set to ' + video.loop) 

});

document.querySelector('#play').addEventListener('click', function(){
	console.log('Play video')
	video.play()
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'

});
document.querySelector('#pause').addEventListener('click', function(){
	console.log('Pause video')
	video.pause()

});
document.querySelector('#slower').addEventListener('click', function(){
	console.log('Slow down')
	video.playbackRate *= .9;
	console.log('Speed is ' + video.playbackRate)

});
document.querySelector('#faster').addEventListener('click', function(){
	console.log('Speed up')
	video.playbackRate /= .9;
	console.log('Speed is ' + video.playbackRate);
	

});
document.querySelector('#skip').addEventListener('click', function(){
	console.log('Skip ahead')
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log('Video current time is ' + video.currentTime);

});
document.querySelector('#mute').addEventListener('click', function(){
	if (video.muted == true){
		console.log('Unmute')
		video.muted = false
		this.innerHTML = 'Mute'
	}

	else{
		console.log('Mute')
		video.muted = true
		this.innerHTML = 'Unmute'
	}

});
document.querySelector('#slider').addEventListener('change', function(){
	video.volume = this.value / 100
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	console.log(document.querySelector('#volume'))
	console.log("The volume is", video.volume)
});	
document.querySelector('#vintage').addEventListener('click', function(){
	document.querySelector('video').className = 'video oldSchool';
});
document.querySelector('#orig').addEventListener('click', function(){
	document.querySelector('video').className = 'video';
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

