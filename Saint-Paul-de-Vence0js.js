var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Saint-Paul-de-Vence_i0.jpg','./sightseeing-Saint-Paul-de-Vence_i1.jpg','./sightseeing-Saint-Paul-de-Vence_i2.jpg','./sightseeing-Saint-Paul-de-Vence_i3.jpg','./sightseeing-Saint-Paul-de-Vence_i4.jpg','./sightseeing-Saint-Paul-de-Vence_i5.jpg','./sightseeing-Saint-Paul-de-Vence_i6.jpg','./sightseeing-Saint-Paul-de-Vence_i2.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Сен-Поль-де-Ванс, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Картина Марка Шагала";};
	if(im0num==pernemoi+1) {im0title="Сен-Поль-де-Ванс, улица галерей";};	
	if(im0num==pernemoi+2) {im0title="вид на Сен-Поль-де-Ванс на подьезде";};
	if(im0num==pernemoi+3) {im0title="Сан-Поль-де-Ванс, фонтан и средневековая прачечная";};
	if(im0num==pernemoi+4) {im0title="Сан-Поль-де-Ванс, кладбище, могила Шагала";};
	if(im0num==pernemoi+5) {im0title="Сен-Поль-де-Ванс, подъем к собору";};
	if(im0num==pernemoi+6) {im0title="Сен-Поль-де-Ванс, рестораны";};	
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}