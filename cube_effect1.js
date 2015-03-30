#pragma strict
var obj : GameObject;
function Start () {

}

function Update () {

}
function OnCollisionEnter(collision:Collision)
{
    Debug.Log(collision.gameObject.name);
    obj = collision.gameObject;
}
