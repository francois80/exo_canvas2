var canvas = document.getElementById('mon_canvas');
var ctx = canvas.getContext('2d');

//"E" du logo
ctx.beginPath();
ctx.moveTo(30,80);
ctx.lineTo(30,230);// grande barre gauche verticale du E
ctx.moveTo(30,80);
ctx.lineTo(100,80);//barre haute horizontale du E
ctx.moveTo(30,155);
ctx.lineTo(100,155);//barre centrale horizontale du E
ctx.moveTo(30,230);
ctx.lineTo(100,230);//barre basse horizontale du E
ctx.strokeStyle= "black";
ctx.lineWidth = 2;//épaisseur du trait
ctx.stroke();

//"2" du logo
ctx.beginPath();
ctx.moveTo(100,80);
//ctx.lineTo(250, 10);
ctx.quadraticCurveTo(290, -60, 225, 80);//début du "2" : courbe haute
ctx.quadraticCurveTo(190, 150, 60, 280);//corps du "2"
ctx.strokeStyle= "#ea4e1d";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(60,283);
ctx.lineTo(160,252);//fin du "2"
ctx.strokeStyle= "#ea4e1d";
ctx.lineWidth = 10;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(159,251);
ctx.lineTo(170,251);//fin du "2"
ctx.strokeStyle= "#ea4e1d";
ctx.lineWidth = 7;
ctx.stroke();



//"N" du logo
ctx.beginPath();
ctx.moveTo(230,230);
ctx.lineTo(230,80);//barre gauche verticale du N
ctx.lineTo(350,230);//barre oblique du N
ctx.lineTo(350,80)//barre droite verticale du N
ctx.strokeStyle= "black";
ctx.lineWidth = 2;//épaisseur du trait
ctx.stroke();

//texte sous le "N" du logo
ctx.font = 'bold 20px Verdana, Arial, serif';
ctx.fillStyle = "#cec4c4";
ctx.fillText('Ecole du numérique', 250,250);
ctx.fillText('du Noyonnais', 250, 270);
