var canvas = document.getElementById('mon_canvas');
var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.arc(150, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
// ctx.moveTo(185,75);
// ctx.arc(150, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
// ctx.moveTo(125, 65);
// ctx.arc(120, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
// ctx.moveTo(195, 65);
// ctx.arc(185, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
// ctx.fillStyle = "#976f0f";
// ctx.stroke();

// Visage
ctx.beginPath();
ctx.arc(200,100,60,0,Math.PI*2,true);
ctx.strokeStyle = "coral";
ctx.fillStyle = "#976f0f";//beige
ctx.fill();
ctx.stroke();

// Bouche
ctx.beginPath();
ctx.moveTo(167,105);
ctx.arc(200,105,30,0,Math.PI,false);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

//sourcil gauche
ctx.beginPath();
ctx.arc(170,75,12,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();
//sourcil droit
ctx.beginPath();
ctx.arc(230,75,12,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

// Yeux
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(230,80,10,0,Math.PI*2,false);//oeil droit
ctx.fill();
ctx.beginPath();
ctx.arc(170,80,10,0,Math.PI*2,false);//oeil gauche
ctx.fill();

//main gauche
ctx.beginPath();
ctx.fillStyle="#976f0f";//beige
ctx.arc(80,155,15,0,Math.PI*2,false);
ctx.fill();
//main droite
ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.arc(320,155,15,0,Math.PI*2,false);
ctx.fill();
//pied gauche
ctx.beginPath();
ctx.fillStyle="#976f0f";//beige
ctx.arc(165,355,15,0,Math.PI*2,false);
ctx.fill();
//pied droit
ctx.beginPath();
ctx.fillStyle="#976f0f";
ctx.arc(235,355,15,0,Math.PI*2,false);
ctx.fill();
//corps
ctx.fillStyle = '#976f0f'; //beige
ctx.fillRect(150,140,100,170);//corps
ctx.fillRect(150,310,30,50);//jambe gauche
ctx.fillRect(220,310,30,50);//jambe droite
ctx.fillRect(80,140,240,30);//bras gauche et droit sans les mains

//bouton 1 sur le corps
ctx.beginPath();
ctx.fillStyle="#7a2976";//violet
ctx.arc(200,210,10,0,Math.PI*2,false);
ctx.fill();
//bouton 2 sur le corps
ctx.beginPath();
ctx.fillStyle="#7a2976";
ctx.arc(200,250,10,0,Math.PI*2,false);
ctx.fill();

//partie entre les jambes
ctx.beginPath();
ctx.arc(200,335,30,0,Math.PI,true);
ctx.strokeStyle = "#976f0f";
ctx.lineWidth = 15;
ctx.stroke();
