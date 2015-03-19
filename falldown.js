#pragma strict
var Speed = 0.5;
function Start () {

}
function OnCollisionEnter(collision:Collision) {
		this.transform.Translate(Vector3(1,0,0)*Speed*Time.deltaTime);
	}
function Update () {

}
