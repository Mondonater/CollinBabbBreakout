#pragma strict

var movementSpeed : float = 10;

function Update () {

	if(Input.GetKey(KeyCode.W)){
	
		gameObject.rigidbody2D.velocity.y = movementSpeed;
	
	}
	else if(Input.GetKey(KeyCode.S)){
	
		gameObject.rigidbody2D.velocity.y = movementSpeed * -1;
	
	}
	else
	{
		gameObject.rigidbody2D.velocity.y = 0;
	}
}