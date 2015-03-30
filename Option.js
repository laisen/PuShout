#pragma strict
var mySkin: GUISkin;
var myAudio: AudioSource;


function OnGUI () {
	GUI.skin=mySkin;
	myAudio = GetComponent(AudioSource);
	if(GUI.Button(Rect(Screen.width/3,Screen.height/6+30,Screen.width/3,Screen.height/7),"Music ON")){
		if (!myAudio.isPlaying){
			myAudio.Play();
	  	}
	}
	if(GUI.Button(Rect(Screen.width/3,Screen.height/3+50,Screen.width/3,Screen.height/7),"Music OFF")){
		if (myAudio.isPlaying){
			myAudio.Stop();
		}
	}
	if(GUI.Button(Rect(Screen.width/3,Screen.height/2+70,Screen.width/3,Screen.height/7),"BACK")){
		Application.LoadLevel(0);
	}
}
