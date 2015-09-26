function init(){
	var canvas = document.getElementById("gameCanvas");
	var renderer = PIXI.autoDetectRenderer(1900, 900,{backgroundColor : 0x1099bb, view: canvas});
	document.body.appendChild(renderer.view);
	var stage = new PIXI.Container();
	
	animate();
	function animate() 
	{
	requestAnimationFrame(animate);
	renderer.render(stage);
	}
	
	setUpStartScreen(stage);
}

function setUpStartScreen(){
  graphics.lineStyle(2, 0xFF00FF, 1);
  graphics.beginFill(0xFF00BB, 0.25);
  graphics.drawRoundedRect(150, 450, 300, 100, 15);
  graphics.endFill();	
}

function setUpCharacterScreen(stage){
	var alienPartBank = new PIXI.Rectangle;
	stage.addChild(alienPartBank);
}
