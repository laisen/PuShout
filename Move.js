#pragma strict
var health = 300;
var obj: GameObject;
var Jump_start: AudioClip;
var Jump_end: AudioClip;
var GetCoin: AudioClip;
var Speed = 0.5;//: float;
var jumpctrl = 1;
var Attackbox: Transform;
var Win: AudioClip;
static var score : int = 1;
var guiScore : GUIText;
var mySkin: GUISkin;
var timer :float;


function Start () {
 timer = 0;
}

function OnCollisionEnter(collision:Collision)
{
    Debug.Log(collision.gameObject.name);
    obj = collision.gameObject;
    if(obj.tag != "enemy")
    {
        this.GetComponent.<AudioSource>().PlayOneShot(Jump_end,5);
        jumpctrl=1;
    }
    if(obj.name== "win"&&score>=25){
        this.GetComponent.<AudioSource>().PlayOneShot(Win,5);
    }
    if(obj.name== "USD"){
        this.GetComponent.<AudioSource>().PlayOneShot(GetCoin,5);
    }
}
function OnGUI(){
GUI.skin=mySkin;
GUI.Label(Rect(20,20,Screen.width/3,Screen.height/7),"Score:"+score);
}

function Update () {
   if(this.transform.position.y >= -0.5) {
    timer = 0;  
    }
    if(this.transform.position.y < -0.5) {
    timer +=Time.deltaTime;  
    }
    if(timer > 6){
    this.transform.position.x = 0;
    this.transform.position.y=10;
    this.transform.position.z=0;
    }
    
    if(Input.GetKey(KeyCode.RightArrow)){
        if(Input.GetKey(KeyCode.LeftShift)){
            this.transform.localRotation.y = 0;
            this.transform.Translate(Vector3(1,0,0)*2*Speed*Time.deltaTime);
           
        }
        else{
            this.transform.localRotation.y = 0;
            this.transform.Translate(Vector3(1,0,0)*Speed*Time.deltaTime);
            
        }
    }
    if(Input.GetKey(KeyCode.LeftArrow)){
        if(Input.GetKey(KeyCode.LeftShift)){
            this.transform.localRotation.y = 90;
            this.transform.Translate(Vector3(1,0,0)*2*Speed*Time.deltaTime);
          
        }
        else{
            this.transform.localRotation.y = 90;
            this.transform.Translate(Vector3(1,0,0)*Speed*Time.deltaTime);
            
        }
    }
    if(Input.GetKey(KeyCode.UpArrow)){
        if(jumpctrl == 1){
            this.GetComponent.<Rigidbody>().AddForce (Vector3.up * 370);
           
            this.GetComponent.<AudioSource>().PlayOneShot(Jump_start,5);
            jumpctrl=0;
        }
    }
    if(Input.GetKey(KeyCode.Space)){
       
    }
         
}



