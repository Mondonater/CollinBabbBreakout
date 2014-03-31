#pragma strict

var movementSpeed : float = 10;

function Start () {

}

function Update () {

	if(Input.GetKey(KeyCode.UpArrow)){
	
		gameObject.rigidbody2D.velocity.y = movementSpeed;
	
	}
	else if(Input.GetKey(KeyCode.DownArrow)){
	
		gameObject.rigidbody2D.velocity.y = movementSpeed * -1;
	
	}
	else
	{
		gameObject.rigidbody2D.velocity.y = 0;
	}
}