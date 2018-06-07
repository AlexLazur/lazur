var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Cannes_i0.jpg','./sightseeing-Cannes_i1.jpg','./sightseeing-Cannes_i2.jpg','./sightseeing-Cannes_i3.jpg','./sightseeing-Cannes_i4.jpg','./sightseeing-Cannes_i5.jpg','./sightseeing-Cannes_i6.jpg','./sightseeing-Cannes_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Канны, центр";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Аллея знаменитостей в Каннах";};
	if(im0num==pernemoi+1) {im0title="Порт Канн вечером";};
	if(im0num==pernemoi+2) {im0title="Порт Канн";};
	if(im0num==pernemoi+3) {im0title="Канны, подъезд к центру";};
	if(im0num==pernemoi+4) {im0title="Канны, набережная Круазет";};
	if(im0num==pernemoi+5) {im0title="Канны, кинофестиваль";};	
	if(im0num==pernemoi+6) {im0title="Красная дорожка в Каннах";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}