var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Toulon_i0.jpg','./sightseeing-Toulon_i1.jpg','./sightseeing-Toulon_i2.jpg','./sightseeing-Toulon_i3.jpg','./sightseeing-Toulon_i4.jpg','./sightseeing-Toulon_i5.jpg','./sightseeing-Toulon_i6.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Тулон, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Тулон, военный порт, мистраль";};
	if(im0num==pernemoi+1) {im0title="Тулон, фотнан старого города";};
	if(im0num==pernemoi+2) {im0title="Канатная дорога на гору Фарон";};
	if(im0num==pernemoi+3) {im0title="Тулон, вид на военный порт с горы Фарон";};
	if(im0num==pernemoi+4) {im0title="Тулон, зоопарк горы Фарон";};
	if(im0num==pernemoi+5) {im0title="Центр нового Тулона";};	
	if(im0num==pernemoi+6) {im0title="Опера Тулона";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}