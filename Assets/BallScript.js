#pragma strict

	var BallSpeed : float = 15;
	var TotalBricksLeft : int = 20;
	var TotalBricksLeft2 : int = 20;

function Start () {

	gameObject.rigidbody2D.velocity.x = BallSpeed * -1;

}

function OnCollisionEnter2D(collisionInfo : Collision2D){

	if(collisionInfo.collider.tag == "Player"){
	
		if(BallSpeed <= 34){
		
			BallSpeed ++;
		
		}
		
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + collisionInfo.collider.rigidbody2D.velocity.y/3 + 5;
		
		Debug.Log(BallSpeed);
	
	}
	else if(collisionInfo.collider.tag == "Block"){
	
		Debug.Log(TotalBricksLeft);
		Destroy(collisionInfo.collider.gameObject);
		TotalBricksLeft --;	
	}
	else if(collisionInfo.collider.tag == "Block2"){
	
		Debug.Log(TotalBricksLeft2);
		Destroy(collisionInfo.collider.gameObject);
		TotalBricksLeft2 --;	
	}
}

function Update () {

	if(TotalBricksLeft <= 0){
	
		Application.LoadLevel("Win Screen P2");
	
	}
	if(TotalBricksLeft2 <= 0){
	
		Application.LoadLevel("Win Screen P1");
	
	}
	if(gameObject.rigidbody2D.velocity.x < BallSpeed && gameObject.rigidbody2D.velocity.x > BallSpeed * -1){
	
		if(gameObject.rigidbody2D.velocity.x >= 0){
		gameObject.rigidbody2D.velocity.x = BallSpeed;
		}
		else if(gameObject.rigidbody2D.velocity.x < 0){
		gameObject.rigidbody2D.velocity.x = BallSpeed * -1;
		}
	}
	if(gameObject.rigidbody2D.velocity.x > 35){
		gameObject.rigidbody2D.velocity.x = 35;
	}
	else if(gameObject.rigidbody2D.velocity.x < -35){
		gameObject.rigidbody2D.velocity.x = -35;
		}
}