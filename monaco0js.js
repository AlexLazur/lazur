var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Monaco_i0.jpg','./sightseeing-Monaco_i1.jpg','./sightseeing-Monaco_i2.jpg','./sightseeing-Monaco_i3.jpg','./sightseeing-Monaco_i4.jpg','./sightseeing-Monaco_i5.jpg','./sightseeing-Monaco_i6.jpg','./sightseeing-Monaco_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Монако, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Монако, порт маленьких яхт";};
	if(im0num==pernemoi+1) {im0title="Казино Монте-Карло";};
	if(im0num==pernemoi+2) {im0title="Монако, отель";};
	if(im0num==pernemoi+3) {im0title="Княжеский дворец в Монако";};
	if(im0num==pernemoi+4) {im0title="Монте-Карло, недалеко от оперы";};
	if(im0num==pernemoi+5) {im0title="Монако,музей Жака Ива Кусто, жёлтая подводная лодка";};	
	//if(im0num==pernemoi+6) {im0title="";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}