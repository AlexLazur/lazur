var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Cagnes_i0.jpg','./sightseeing-Cagnes_i1.jpg','./sightseeing-Cagnes_i2.jpg','./sightseeing-Cagnes_i3.jpg','./sightseeing-Cagnes_i4.jpg','./sightseeing-Cagnes_i5.jpg','./sightseeing-Cagnes_i6.jpg','./sightseeing-Cagnes_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="вид Кань, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	//if(im0num==pernemoi+0) {im0title="";};
	if(im0num==pernemoi+1) {im0title="О-де-Кань,улочки старого города";};
	if(im0num==pernemoi+2) {im0title="Кань, центральная площадь и музей";};
	if(im0num==pernemoi+3) {im0title="О-де-Кань, жилые кварталы";};
	if(im0num==pernemoi+4) {im0title="Кань, ресторан";};
	if(im0num==pernemoi+5) {im0title="О-де-Кань, главная улица";};	
	if(im0num==pernemoi+6) {im0title="Кань-сюр-мер, Замок Грмальди";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}