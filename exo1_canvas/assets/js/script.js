var canvas = document.getElementById("mon_canvas");
var ctx = canvas.getContext("2d");

//cornet de glace
ctx.beginPath();
ctx.moveTo(200, 200);//point de départ
ctx.lineTo(250,100);//de la pointe vers la droite(côté droit du cone)
ctx.lineTo(150,100)//dessus du cone
//ctx.lineTo(200,200);//de la gauche vers le bas(côté gauche du cone)
ctx.fillStyle = '#aa6522';
ctx.fill();//application du style

// glace
//Arc de cercle bleu
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#8a0908';
ctx.arc(200,100,50,0.001*Math.PI, Math.PI, true);//top, left, rayon
ctx.fill();//application du style
