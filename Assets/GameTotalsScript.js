#pragma strict

	var PlayerOneBlocksRemaining : int = 20;

function Start () {

}

function Update () {

	if(Input.GetKey(KeyCode.R)){
	
		Application.LoadLevel("Breakout Vs.");
	
	}
	
	if (Input.GetKey(KeyCode.Escape)){
	
		Application.Quit();
	
	}
}