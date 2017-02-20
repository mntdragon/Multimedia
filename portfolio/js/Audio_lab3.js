var audio = document.getElementById('audio');
///var	Loading = document.querySelectorAll('.load_audio span');//2 spans so choose 1st span
var	pause = document.getElementById('pause');
var play = document.getElementById('play');
//var	currentTime = document.getElementById('currentTime');
//var	seek = document.getElementById('seek');
//var	durationTime = document.getElementById('durationTime');
//var	muted = document.getElementById('muted');

   function playMusic(){
       if(audio.paused){
         audio.play();
       }
   }
   function pauseMusic(){
       if(!audio.paused){
        audio.pause();
       }
   }
   
   function minusVolume(){
       if(audio.volume > 0){ 
           audio.volume -= 0.1; 
        }
        else
        { 
            audio.volume = 0;
        }
     
            change();
        console.log("audio: "+ audio.volume);
   } 

   function plusVolume(){
       if(audio.volume < 1){
           audio.volume += 0.1;
       }
       else{
           audio.volume = 1;
       }
       change();
   }

 function mute() {
 	if (audio.muted) {
		// turn on
 		audio.muted = false;
 	} else {
		// turn off
 		audio.muted = true;
        
	}
   
    change();
 };
function change(){
    document.getElementById("bar").style.width = (audio.volume*100) + "%";
}
    //Check if audio is running, pasue is on and vice sera
    //pause.addEventListener('click', playPauseMusic, false);

//     function playPauseMusic() {
// 	if (audio.paused) {
// 		audio.play();
// 		// check current time of load_audio
// 		timeInterval = setInterval(timeUpdate, 100);
// 		// change value of seek
// 		seek.addEventListener('change', seekMusic, false);
// 	} else if(!audio.paused && !audio.ended) {
// 		audio.pause();
// 	}
// };

//     //Update stt of time inn audio
//     function timeUpdate() {
// 	// whole duration
// 	durationTime.innerHTML = audio.duration;
// 	// current time
// 	currentTime.innerHTML = audio.currentTime;
// 	seek.max = audio.duration;
// 	seek.value = audio.currentTime;
// };

// function seekMusic() {
// 	audio.currentTime = seek.value;
// };

// //Check if volumn is on or off
// //muted.addEventListener('click', mutedMusic, false);

// function mutedMusic() {
// 	if (audio.muted) {
// 		// turn on
// 		audio.muted = false;
// 	} else {
// 		// turn off
// 		audio.muted = true;
// 	}
// };

