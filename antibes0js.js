var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Antibes_i0.jpg','./sightseeing-Antibes_i1.jpg','./sightseeing-Antibes_i2.jpg','./sightseeing-Antibes_i3.jpg','./sightseeing-Antibes_i4.jpg','./sightseeing-Antibes_i5.jpg','./sightseeing-Antibes_i6.jpg','./sightseeing-Antibes_i7.jpg'
];
var im0 = document.getElementById('im0id'); var im0title="вид Антиба недалеко от старого города";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+3) {im0title="Форт Карре";};
	if(im0num==pernemoi+6) {im0title="Крепостная стена Антиба";};
	if(im0num==pernemoi+1) {im0title="Пляж Антиба в старом городе";};
	if(im0num==pernemoi+0) {im0title="Поль Синьяк: Антиб, Розовое облако";};
	if(im0num==pernemoi+2) {im0title="Яхта миллионера в порте Вобан, Антиб";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}