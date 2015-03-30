#pragma strict
var ReloadTimer: float;
var Boom: GameObject;
var lifetime = 1.0;
var isDead = 0;
var own : GameObject;

function Start () {
	ReloadTimer = 0;
}

function Update () {
	if(ReloadTimer > 0){
	    ReloadTimer -= Time.deltaTime;
	}
	if(own.transform.position.y > 0) {
    	isDead = 0;
    }
    if(own.transform.position.y <= 0) {
    	isDead = 1;
   	}
	if(Input.GetKey(KeyCode.S) && isDead != 1){
	    if(ReloadTimer <= 0){
			Destroy(Instantiate(Boom, transform.position, transform.rotation),lifetime);
		    ReloadTimer = 0.5;
		}
	}
}
