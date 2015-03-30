#pragma strict

var anim : Animator;
var isDead = 0;
var timer : float;
//var walkHush : int = Animator.StringToHash("Walk");

function Start () 
{
	timer = 0;
    anim = GetComponent("Animator");
}

function Update () {

	if(this.transform.position.y > 0) {
    	timer = 0;  
    	isDead = 0;
    	anim.SetBool("Dead", false);
    }
    if(this.transform.position.y <= 0) {
    	isDead = 1;
    	anim.SetBool("Dead", true); 
    	anim.SetBool("Walk", false); 
    }
    
//    var move : float = Input.GetAxis ("Vertical");
//    anim.SetFloat("Speed", move);

    if(Input.GetButtonDown("Horizontal2")){
    	anim.SetBool("Walk", true);   
    }
    if(Input.GetButtonUp("Horizontal2")){
    	anim.SetBool("Walk", false);   	
    }
}
