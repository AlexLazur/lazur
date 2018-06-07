var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Frejus_i0.jpg','./sightseeing-Frejus_i1.jpg','./sightseeing-Frejus_i2.jpg','./sightseeing-Frejus_i3.jpg','./sightseeing-Frejus_i4.jpg','./sightseeing-Frejus_i5.jpg','./sightseeing-Frejus_i6.jpg','./sightseeing-Frejus_i2.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="вид Фрежюса недалеко от старого города";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Фрежюс, строение";};	
	if(im0num==pernemoi+1) {im0title="Фрежюс, песчаные пляжи";};
	if(im0num==pernemoi+2) {im0title="Фрежюс, стена старого города";};
	if(im0num==pernemoi+3) {im0title="Городской пляж Фрежюса";};
	if(im0num==pernemoi+4) {im0title="Колокольня Фрежюса";};
	if(im0num==pernemoi+5) {im0title="Средиземноморский дворец ";};	
	if(im0num==pernemoi+6) {im0title="Собор Фрежюса";};	
	if(im0num==pernemoi+7) {im0title="Фрежюс, стена старого города";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}