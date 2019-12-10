var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');

// Define the points as {x, y}
var X = c.width ;
var Y = c.height ;

//le hublot de la soucoupe
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.fillStyle = 'white';
  ctx.arc(200,120,60,0.01*Math.PI, Math.PI, true);//top, left, rayon
  ctx.fill();//application du style
  
	// la soucoupe sans le hublot (juste la forme de l'oeil)
	ctx.beginPath();
  ctx.fillStyle = "white";
	ctx.moveTo(50,Y/2) ;
	ctx.quadraticCurveTo(X/2, 10, X-40,Y/2);
	ctx.moveTo(50,Y/2) ;
	ctx.quadraticCurveTo(X/2, Y-80, X-40,Y/2);
	ctx.lineWidth = '4';
	ctx.fill();
