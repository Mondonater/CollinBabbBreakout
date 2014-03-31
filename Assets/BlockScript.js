#pragma strict

function Start () {

}

function CheckCollision (collisionInfo : Collision2D){

	if(collisionInfo.collider.tag == "Respawn"){
	
		Debug.Log("Collision Detected.");
	}
}

function Update () {

}