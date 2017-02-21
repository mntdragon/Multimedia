var	pause = document.getElementById('pause');
var play = document.getElementById('play');
var video = document.getElementById('video');

play.onclick = function(){
video.play(); // chạy video
}
pause.onclick = function(){
video.pause();
}

function minusVolume(){
       if(video.volume > 0){ 
           video.volume -= 0.1; 
        }
        else
        { 
            video.volume = 0;
        }
     
            change();
        console.log("video: "+ video.volume);
   } 

   function plusVolume(){
       if(video.volume < 1){
           video.volume += 0.1;
       }
       else{
           video.volume = 1;
       }
       change();
   }

function mute() {
 	if (video.muted) {
		// turn on
 		video.muted = false;
 	} else {
		// turn off
 		video.muted = true;
        
	}
   

 };

   function change(){
    document.getElementById("bar").style.width = (video.volume*100) + "%";
}