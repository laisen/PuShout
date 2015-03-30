#pragma strict
var health = 300;
var obj: GameObject;
var mySkin: GUISkin;
var guiScore : GUIText;
//
var Jump_start: AudioClip;
var Jump_end: AudioClip;
var GetCoin: AudioClip;
var Win: AudioClip;
//
var Speed = 6.0;//: float;
var jumpctrl = 2;
var forcejump = 2;
var isDead = 0;
//
var timer :float;
var isRebirth: float;
//
var target : Transform;
var Attackbox: Transform;
var walk = 0;
var B:GameObject;

//
static var score : int = 0;

function Start(){
	timer = 0;
}

function OnCollisionEnter(collision:Collision){
    Debug.Log(collision.gameObject.name);
    obj = collision.gameObject;
    if(obj.tag == "JumpP")
    {
        this.GetComponent.<AudioSource>().PlayOneShot(Jump_end,5);
        jumpctrl = 2;
        forcejump = 2;
    }
    if(obj.tag == "Player")
    {
        this.GetComponent.<AudioSource>().PlayOneShot(Jump_end,5); 
        	if(this.transform.position.y > B.transform.position.y && forcejump >0)
    	{
			this.GetComponent.<Rigidbody>().AddForce (Vector3.up * 250);  
			jumpctrl=1;
			forcejump -=1;
    	}
    }   
}

function OnTriggerEnter (other : Collider) {
		 Debug.Log(other.gameObject.name);
	}
	
function Update () {
	if(this.transform.position.y > 0) {
		timer = 0;  
    	isDead = 0;
    }
    if(this.transform.position.y <= 0) {
    	isDead = 1;
    	timer +=Time.deltaTime;  
    }
    if(timer > 5){
    	this.transform.position.x = 5;
    	this.transform.position.y = 30;
    	this.transform.position.z = 0;
    	isDead = 0;
    	isRebirth +=Time.deltaTime;
    	if (isRebirth > 3){
    		this.GetComponent.<Rigidbody>().AddForce (Vector3.up * 0);
    		isRebirth = 0;
    	}
    }
    
    if(this.transform.position.y < target.transform.position.y){
    	this.transform.position.y = target.transform.position.y;
	}	
    if(Input.GetButtonUp("Horizontal2")){
		walk = 0;
		this.transform.position.z = 0;
	}
    if(Input.GetButtonDown("Horizontal2")){
    	walk = 1;
    }
    if (isDead == 0 || walk == 0){	
		if(Input.GetKey(KeyCode.J)){
			this.transform.localRotation.y = 90;
		    this.transform.Translate(Vector3(1,0,0)*Speed*Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.L)){
		    this.transform.localRotation.y = 0;
		    this.transform.Translate(Vector3(1,0,0)*Speed*Time.deltaTime);
		 	}
	    if(Input.GetButtonDown("Jump2")){
	        if(jumpctrl > 0 ){
	            this.GetComponent.<Rigidbody>().AddForce (Vector3.up * 350);  
	            this.GetComponent.<AudioSource>().PlayOneShot(Jump_start,5);
	            jumpctrl -= 1;
	        }
	    }
	}
}
