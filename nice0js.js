var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Nice_i0.jpg','./sightseeing-Nice_i1.jpg','./sightseeing-Nice_i2.jpg','./sightseeing-Nice_i3.jpg','./sightseeing-Nice_i4.jpg','./sightseeing-Nice_i5.jpg','./sightseeing-Nice_i6.jpg','./sightseeing-Nice_i7.jpg'
];
var im0 = document.getElementById('im0id'); var im0title="вид Ниццы недалеко от старого города";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Фонтан у площади Массена";};
	if(im0num==pernemoi+1) {im0title="Английская набережная";};
	if(im0num==pernemoi+2) {im0title="Самый большой зарубежом русский собор";};
	if(im0num==pernemoi+3) {im0title="Вид площади Массена";};
	if(im0num==pernemoi+4) {im0title="Самый дорогой отель Лазурного берега";};
	if(im0num==pernemoi+5) {im0title="Рынок Салея";};	
	if(im0num==pernemoi+6) {im0title="Пляж английской набережной";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}