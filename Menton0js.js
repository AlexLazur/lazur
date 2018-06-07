var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Menton_i0.jpg','./sightseeing-Menton_i1.jpg','./sightseeing-Menton_i2.jpg','./sightseeing-Menton_i3.jpg','./sightseeing-Menton_i4.jpg','./sightseeing-Menton_i5.jpg','./sightseeing-Menton_i6.jpg','./sightseeing-Menton_i7.jpg',
	'./sightseeing-Menton_i8.jpg','./sightseeing-Menton_i9.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Ментон, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Ментон, церковь, старый город";};
	if(im0num==pernemoi+1) {im0title="Порт Ментона";};
	if(im0num==pernemoi+2) {im0title="Кафедральный собор Ментона";};
	//if(im0num==pernemoi+3) {im0title="";};
	//if(im0num==pernemoi+4) {im0title="";};
	if(im0num==pernemoi+5) {im0title="Цитадель Ментона";};	
	if(im0num==pernemoi+6) {im0title="Ментон, улицы старого города";};
	if(im0num==pernemoi+7) {im0title="Ментон, гора бывшего замка, вид на кладбище";};
	if(im0num==pernemoi+8) {im0title="Ментон, улица морской променад";};
	if(im0num==pernemoi+9) {im0title="Ментон, городской пляж";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}