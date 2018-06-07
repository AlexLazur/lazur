var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Grasse_i0.jpg','./sightseeing-Grasse_i1.jpg','./sightseeing-Grasse_i2.jpg','./sightseeing-Grasse_i3.jpg','./sightseeing-Grasse_i4.jpg','./sightseeing-Grasse_i5.jpg','./sightseeing-Grasse_i6.jpg','./sightseeing-Grasse_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="вид Граса недалеко от старого города";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Старинное парфюмерное оборудование";};
	if(im0num==pernemoi+1) {im0title="Приготовление духов";};
	if(im0num==pernemoi+2) {im0title="Дворец конгрессов";};
	if(im0num==pernemoi+3) {im0title="Грас на закате";};
	if(im0num==pernemoi+4) {im0title="вид Граса недалеко от парфюмерной фабрики";};
	if(im0num==pernemoi+5) {im0title="Улица Граса";};	
	if(im0num==pernemoi+6) {im0title="Парфюмерный магазин на фабрике";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}